import {
  Alert,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AxiosResponse } from "axios";
import moment, { Moment } from "moment";
import { useState } from "react";
import { BoxSize } from "../../../../constants/BoxSize";
import { Box } from "../../../../redux/feature/box";
import { setBoxes } from "../../../../redux/feature/boxesSlice";
import {
  addErrorMessage,
  addSuccessMessage,
} from "../../../../redux/feature/messageSlice";
import { updateParcel } from "../../../../redux/feature/parcelSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import ajaxService from "../../../../services/AjaxService";

interface SuccessfulDepositMessage {
  name: string;
  password: string;
}

export default function Deposit() {
  const dispatch = useAppDispatch();
  const boxes = useAppSelector((state) => state.boxes.value);
  const parcel = useAppSelector((state) => state.parcel.value);
  const selectedLocation = useAppSelector((state) => state.location.value);
  const [until, setUntil] = useState<Moment | null>(moment());
  const [size, setSize] = useState<BoxSize>(BoxSize.A);

  const noSpace = !boxes.some((box) => box.empty);

  const handleSendClick = () => {
    if (
      !moment(until).isBetween(
        moment().format("YYYY-MM-DD"),
        moment().add(1, "year").format("YYYY-MM-DD"),
        "day",
        "[]"
      )
    ) {
      dispatch(
        addErrorMessage(
          "Please select a date between today and one year from now"
        )
      );

      return;
    }

    ajaxService
      .post(`parcels/location/${selectedLocation?.id}/`, parcel)
      .then((response) => {
        const data = (response as AxiosResponse)
          ?.data as SuccessfulDepositMessage;

        if (!data) {
          return;
        }

        dispatch(
          addSuccessMessage(
            `Successful deposit! Username: ${data.name} password: ${data.password}`
          )
        );

        ajaxService
          .get(`boxes/location/${selectedLocation?.id}`)
          .then((response) => {
            const boxes = (response as AxiosResponse).data.boxes;

            for (const box of boxes) {
              box.empty = Boolean(!box.parcelId);
            }

            dispatch(
              setBoxes(
                boxes.sort((a: Box, b: Box) => a.size.localeCompare(b.size))
              )
            );
          });
      });
  };

  const handleUntilChange = (newValue: Moment | null) => {
    setUntil(newValue);
    handleUpdateParcel(
      "until",
      newValue ? newValue.format("YYYY-MM-DD") : null
    );
  };

  const handleSizeChange = (newValue: BoxSize) => {
    setSize(newValue);
    handleUpdateParcel("size", newValue);
  };

  const handleUpdateParcel = (property: string, value: string | null) => {
    console.log("CHANGE", property, value);
    dispatch(updateParcel({ ...parcel, [property]: value }));
  };

  if (noSpace) {
    return (
      <Alert sx={{ m: 2 }} severity="error">
        There is no free box! Please try another location.
      </Alert>
    );
  }

  return (
    <>
      <h3>Deposit</h3>
      <FormControl>
        <FormLabel id="box-size-label">Size*</FormLabel>
        <RadioGroup
          row
          aria-labelledby="box-size-label"
          name="box-size"
          defaultValue="A"
        >
          <FormControlLabel
            value="A"
            onChange={() => handleSizeChange(BoxSize.A)}
            control={<Radio />}
            label="A"
          />
          <FormControlLabel
            value="B"
            control={<Radio />}
            label="B"
            onChange={() => handleSizeChange(BoxSize.B)}
          />
          <FormControlLabel
            value="C"
            control={<Radio />}
            label="C"
            onChange={() => handleSizeChange(BoxSize.C)}
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="date-label">Until*</FormLabel>
        <DatePicker
          label="Pickable Until"
          value={until}
          onChange={(newValue) => {
            handleUntilChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          minDate={moment()}
          maxDate={moment().add(1, "year")}
        />
      </FormControl>
      <FormControl>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => handleUntilChange(moment().add(1, "day"))}>
            1 day
          </Button>
          <Button onClick={() => handleUntilChange(moment().add(3, "days"))}>
            3 days
          </Button>
          <Button onClick={() => handleUntilChange(moment().add(1, "week"))}>
            1 week
          </Button>
        </ButtonGroup>
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          onChange={(event) => handleUpdateParcel("name", event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <TextField
          id="password"
          type="password"
          label="Password"
          variant="outlined"
          onChange={(event) =>
            handleUpdateParcel("password", event.target.value)
          }
        />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <Button variant="contained" onClick={handleSendClick}>
          Send
        </Button>
      </FormControl>
    </>
  );
}

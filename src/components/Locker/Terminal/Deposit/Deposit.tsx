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
import moment, { Moment } from "moment";
import { useState } from "react";
import { updateParcel } from "../../../../redux/feature/parcelSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import ajaxService from "../../../../services/AjaxService";

export default function Deposit() {
  const dispatch = useAppDispatch();
  const boxes = useAppSelector((state) => state.boxes.value);
  const parcel = useAppSelector((state) => state.parcel.value);
  const selectedLocation = useAppSelector((state) => state.location.value);
  const [until, setUntil] = useState<Moment | null>(moment());

  const noSpace = !boxes.some((box) => box.empty);

  const handleSendClick = () => {
    console.log("SEND");
    console.log(parcel);
    ajaxService.post(`parcels/location/${selectedLocation?.id}/`, parcel);
  };

  const handleUntilChange = (newValue: Moment | null) => {
    setUntil(newValue);
    handleUpdateParcel(
      "until",
      newValue ? newValue.format("YYYY-MM-DD") : null
    );
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
        <RadioGroup row aria-labelledby="box-size-label" name="box-size">
          <FormControlLabel
            value="A"
            onChange={() => handleUpdateParcel("size", "A")}
            control={<Radio />}
            label="A"
          />
          <FormControlLabel
            value="B"
            control={<Radio />}
            label="B"
            onChange={() => handleUpdateParcel("size", "B")}
          />
          <FormControlLabel
            value="C"
            control={<Radio />}
            label="C"
            onChange={() => handleUpdateParcel("size", "C")}
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
        <TextField id="username" label="Username" variant="outlined" />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <TextField
          id="password"
          type="password"
          label="Password"
          variant="outlined"
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

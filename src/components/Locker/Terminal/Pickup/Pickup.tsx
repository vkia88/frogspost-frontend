import { Button, FormControl, TextField } from "@mui/material";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { Box } from "../../../../redux/feature/box";
import { setBoxes } from "../../../../redux/feature/boxesSlice";
import {
  addErrorMessage,
  addSuccessMessage,
} from "../../../../redux/feature/messageSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import ajaxService from "../../../../services/AjaxService";

interface ParcelRequest {
  name: string;
  password: string;
}

export default function Pickup() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const selectedLocation = useAppSelector((state) => state.location.value);
  const dispatch = useAppDispatch();

  const handleGetParcelClick = () => {
    if (!name || !password) {
      dispatch(addErrorMessage("Name and password are required."));
      return;
    }

    const parcelRequest = {
      name,
      password,
    } as ParcelRequest;

    ajaxService
      .post(`parcels/location/${selectedLocation?.id}/get/`, parcelRequest)
      .then((response) => {
        const successMessage = (response as AxiosResponse).data;

        if (!successMessage) {
          return;
        }

        dispatch(addSuccessMessage(successMessage));

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

  return (
    <>
      <h3>Pick Up</h3>
      <FormControl sx={{ m: 1 }}>
        <TextField
          id="username"
          label="Username*"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <TextField
          id="password"
          type="password"
          label="Password*"
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <Button variant="contained" onClick={handleGetParcelClick}>
          Get Parcel
        </Button>
      </FormControl>
    </>
  );
}

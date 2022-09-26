import {
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

export default function Deposit() {
  const [value, setValue] = useState<Moment | null>(moment());

  return (
    <>
      <h3>Deposit</h3>
      <FormControl>
        <FormLabel id="box-size-label">Size</FormLabel>
        <RadioGroup row aria-labelledby="box-size-label" name="box-size">
          <FormControlLabel value="A" control={<Radio />} label="A" />
          <FormControlLabel value="B" control={<Radio />} label="B" />
          <FormControlLabel value="C" control={<Radio />} label="C" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="date-label">Until</FormLabel>
        <DatePicker
          label="Pickable Until"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          minDate={moment()}
          maxDate={moment().add(1, "year")}
        />
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => setValue(moment().add(1, "day"))}>
            1 day
          </Button>
          <Button onClick={() => setValue(moment().add(3, "days"))}>
            3 days
          </Button>
          <Button onClick={() => setValue(moment().add(1, "week"))}>
            1 week
          </Button>
        </ButtonGroup>
      </FormControl>
    </>
  );
}

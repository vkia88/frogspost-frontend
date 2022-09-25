import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function Deposit() {
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
    </>
  );
}

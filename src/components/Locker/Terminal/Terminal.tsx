import { Button, ButtonGroup } from "@mui/material";
import { TerminalType } from "../../../constants/TerminalType";
import {
  selectDeposit,
  selectPickup,
} from "../../../redux/feature/terminalTypeSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export default function Terminal() {
  const terminalType = useAppSelector((state) => state.terminalType.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => dispatch(selectDeposit())}>Deposit</Button>
        <Button onClick={() => dispatch(selectPickup())}>Pick Up</Button>
      </ButtonGroup>
      {terminalType === TerminalType.DEPOSIT ? "Deposit" : "Pick Up"}
    </>
  );
}

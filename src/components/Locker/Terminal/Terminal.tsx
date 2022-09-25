import { Button, ButtonGroup } from "@mui/material";
import { TerminalType } from "../../../constants/TerminalType";
import {
  selectDeposit,
  selectPickup,
} from "../../../redux/feature/terminalTypeSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Deposit from "./Deposit/Deposit";

export default function Terminal() {
  const terminalType = useAppSelector((state) => state.terminalType.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>Terminal</h2>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => dispatch(selectDeposit())}>Deposit</Button>
        <Button onClick={() => dispatch(selectPickup())}>Pick Up</Button>
      </ButtonGroup>
      {terminalType === TerminalType.DEPOSIT ? <Deposit /> : "Pick Up"}
    </>
  );
}

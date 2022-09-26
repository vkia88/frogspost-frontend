import { Button, ButtonGroup } from "@mui/material";
import { TerminalType } from "../../../constants/TerminalType";
import {
  selectDeposit,
  selectPickup,
} from "../../../redux/feature/terminalTypeSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Deposit from "./Deposit/Deposit";
import Pickup from "./Pickup/Pickup";

export default function Terminal() {
  const terminalType = useAppSelector((state) => state.terminalType.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>Terminal</h2>
      <Button
        onClick={() => dispatch(selectDeposit())}
        variant={terminalType === TerminalType.DEPOSIT ? "outlined" : "text"}
      >
        Deposit
      </Button>
      <Button
        onClick={() => dispatch(selectPickup())}
        variant={terminalType === TerminalType.PICKUP ? "outlined" : "text"}
      >
        Pick Up
      </Button>
      {terminalType === TerminalType.DEPOSIT ? <Deposit /> : <Pickup />}
    </>
  );
}

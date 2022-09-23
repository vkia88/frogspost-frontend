import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { TerminalType } from "../../../constants/TerminalType";

export default function Terminal() {
  const [type, setType] = useState<TerminalType>(TerminalType.DEPOSIT);

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => setType(TerminalType.DEPOSIT)}>Deposit</Button>
        <Button onClick={() => setType(TerminalType.PICKUP)}>Pick Up</Button>
      </ButtonGroup>
      {type === TerminalType.DEPOSIT ? "Deposit" : "Pick Up"}
    </>
  );
}

import { Button, Container, CssBaseline } from "@mui/material";
import { setBoxes } from "../../redux/feature/boxesSlice";
import { useAppDispatch } from "../../redux/hooks";
import { defaultBoxes } from "./helper";

export default function Header() {
  const dispatch = useAppDispatch();

  function loadDefaultBoxes() {
    dispatch(setBoxes(defaultBoxes));
  }

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <h1>Locker</h1>
        <Button onClick={loadDefaultBoxes}>Load default boxes</Button>
      </Container>
    </>
  );
}

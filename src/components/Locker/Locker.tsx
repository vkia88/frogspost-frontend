import { Container, CssBaseline, Grid } from "@mui/material";
import Boxes from "./Boxes/Boxes";
import Terminal from "./Terminal/Terminal";

export default function Locker() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Boxes />
          </Grid>
          <Grid item xs={12} md={4}>
            <Terminal />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

import Header from "./components/Header/Header";
import Locker from "./components/Locker/Locker";
import classnames from "classnames";
import "./App.css";
import { useAppSelector } from "./redux/hooks";
import { Alert } from "@mui/material";

function App() {
  const selectedLocation = useAppSelector((state) => state.location.value);

  return (
    <div className={classnames("app")}>
      <Header />
      {selectedLocation ? (
        <Locker />
      ) : (
        <Alert sx={{ m: 2 }} severity="warning">
          Please select a location
        </Alert>
      )}
    </div>
  );
}

export default App;

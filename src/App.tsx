import Header from "./components/Header/Header";
import Locker from "./components/Locker/Locker";
import classnames from "classnames";
import "./App.css";

function App() {
  return (
    <div className={classnames("app")}>
      <Header />
      <Locker />
    </div>
  );
}

export default App;

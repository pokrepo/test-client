import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import "reset-css";
import "./index.scss";

export const App = (props) => {
  return (
    <Router basename="/">
      <Navbar />
      <Main />
    </Router>
  );
};

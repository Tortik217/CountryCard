import Cities from "../data/Cities";
import CountryPanel from "./components/CountryPanel/CountryPanel";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function Root() {
  const city = Cities();
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Header />
      <div className="output">
        <Outlet context={{ city }} />
      </div>
    </div>
  );
}

export default Root;

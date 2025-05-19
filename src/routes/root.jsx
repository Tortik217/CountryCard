import Cities from "./components/Cities/Cities";
import CountryPanel from "./components/CountryPanel/CountryPanel";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function Root() {
  const countries = Cities();
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Header />
      <div className="output">
        <Outlet context={{ countries }} />
      </div>
    </div>
  );
}

export default Root;

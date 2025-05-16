import CountryPanel from "./components/CountryPanel/CountryPanel";
import Header from "./components/Header/Header";

function Root() {
  return (
    <div className="
    container 
    d-flex flex-column j
    ustify-content-center 
    align-items-center">
      <Header />
      <CountryPanel />
    </div>
  );
}

export default Root;

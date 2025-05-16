import City from "../City/City";
import Country from "../Country/Country";

function CountryPanel() {
  return (
    <div
      className="
    wrapper
    border border-primary rounded-3
    p-4
    "
    >
      <div className="country">
        <Country />
      </div>
      <div className="Cities">
        <City />
      </div>
    </div>
  );
}

export default CountryPanel;

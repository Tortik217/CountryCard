import City from "../City/City";
import Country from "../Country/Country";
import Cities from "../Cities/Cities";
import { NavLink } from "react-router-dom";


function CountryPanel() {
  const countries = Cities();

  return (
    <div className="wrapper border border-primary rounded-3 p-4">
      <div className="country d-flex gap-4 ">
        {countries.map((country) => (
          <Country key={country.id} title={country.title}>
            <div className="Cities d-flex gap-3">
              {country.cities.map((city) => (
                // <City key={city.id} city={city} />
                <li key={city.id}>
                  <NavLink to={`/city/${city.id}`}>{city.title}</NavLink>
                </li>
              ))}
            </div>
          </Country>
        ))}
      </div>
    </div>
  );
}

export default CountryPanel;

import Country from "../Country/Country";
import { NavLink, useOutletContext } from "react-router-dom";

function CountryPanel() {
  const { city } = useOutletContext();

  return (
    <div className="wrapper border border-primary rounded-3 p-4">
      <div className="country d-flex gap-4">
        {city.map((country) => (
          <Country
            key={country.id}
            title={
              <NavLink to={`/country/${country.id}`}>{country.title}</NavLink>
            }
          >
            <div className="Cities d-flex gap-3 flex-wrap">
              {country.cities.slice(0, 3).map((city) => (
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

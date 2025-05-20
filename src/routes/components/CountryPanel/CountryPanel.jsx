import Country from "../Country/Country";
import { NavLink, useOutletContext } from "react-router-dom";


function CountryPanel() {
  const { countries } = useOutletContext();

  return (
    <div className="wrapper border border-primary rounded-3 p-4">
      <div className="country d-flex gap-4 ">
        {countries.map((country) => (
          <Country key={country.id} title={country.title}>
            <div className="Cities d-flex gap-3">
              {country.cities.map((city) => (
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

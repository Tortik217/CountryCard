import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Country from "./Country";

function CountryPage() {
  const { id } = useParams();
  const { city } = useOutletContext();

  const country = city.find((c) => String(c.id) === id);

  const sortedCities = [...country.cities].sort((a, b) =>
  a.title.localeCompare(b.title)
);


  if (!country) return <p>Страна не найдена</p>;

  return (
    <Country title={country.title}>
      <div className="Cities d-flex gap-3 flex-wrap">
        {sortedCities.map((city) => (
          <li key={city.id}>
            <a href={`/city/${city.id}`}>{city.title}</a>
          </li>
        ))}
      </div>
    </Country>
  );
}

export default CountryPage;

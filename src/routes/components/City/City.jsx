import { useParams, useOutletContext } from "react-router-dom";

function City() {
  const { id } = useParams();
  const { countries } = useOutletContext();

  const city = countries
    .flatMap((country) => country.cities)
    .find((city) => city.id.toString() === id);

  if (!city) return <p>Город не найден</p>;

  return (
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{city.title}</h5>
        <p className="card-text">{city.peopleCount}</p>
        <p className="card-text">{city.title}</p>
        <p className="card-text">{city.area}</p>
        <p className="card-text">{city.dateOfFoundation}</p>
        <p className="card-text">{city.history}</p>
        <div className="text-center">
          {city.imgOfAttractions.map((img, index) => (
            <img
              key={index}
              src={img.src}
              className="rounded"
              alt={img.alt}
              style={{ maxWidth: "100%", marginBottom: "1rem" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default City;

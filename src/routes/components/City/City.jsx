import { useParams, useOutletContext } from "react-router-dom";

function City() {
  const { id } = useParams();
  const { city } = useOutletContext();

  const cityMap = city
    .flatMap((country) => country.cities)
    .find((cityMap) => cityMap.id.toString() === id);

  if (!cityMap) return <p>Город не найден</p>;

  return (
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{cityMap.title}</h5>
        <p className="card-text">{cityMap.peopleCount}</p>
        <p className="card-text">{cityMap.title}</p>
        <p className="card-text">{cityMap.area}</p>
        <p className="card-text">{cityMap.dateOfFoundation}</p>
        <p className="card-text">{cityMap.history}</p>
        <div className="text-center">
          {cityMap.imgOfAttractions.map((img, index) => (
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

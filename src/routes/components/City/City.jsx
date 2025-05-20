import { useParams, useOutletContext } from "react-router-dom";

function City() {
  const { id } = useParams();
  const { city } = useOutletContext();

  const cityMap = city
    .flatMap((country) => country.cities)
    .find((cityMap) => cityMap.id.toString() === id);

  if (!cityMap) return <p>Город не найден</p>;

  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body d-flex flex-column gap-3">
        <h5 className="card-title">{cityMap.title}</h5>
        <div className="card-text">
          <strong>Население: </strong>{cityMap.peopleCount} человек
        </div>
        <div className="card-text">
          <strong>Площадь: </strong>{cityMap.area} км²
        </div>
        <div className="card-text">
          <strong>Дата Основания: </strong>{cityMap.dateOfFoundation} год
        </div>
        <div className="card-text">
          <strong>История: </strong>{cityMap.history}
        </div>
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

function City({ city }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{city.title}</h5>
        <p className="card-text">{city.peopleCount}</p>
        <p className="card-text">{city.title}</p>
        <p className="card-text">{city.area}</p>
        <p className="card-text">{city.dateOfFoundation}</p>
        <p className="card-text">{city.history}</p>
      </div>
    </div>
  );
}

export default City;

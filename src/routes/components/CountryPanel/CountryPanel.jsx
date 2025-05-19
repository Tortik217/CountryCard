import City from "../City/City";
import Country from "../Country/Country";
import Cities from "../Cities/Cities";

function CountryPanel() {
  const films = Cities();

  return (
    <div
      className="wrapper border border-primary rounded-3 p-4"
    >
      <div className="country">
        <Country />
      </div>
      <div className="Cities">
        {films.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default CountryPanel;

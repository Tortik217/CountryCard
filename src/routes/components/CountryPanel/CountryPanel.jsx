import City from "../City/City";
import Country from "../Country/Country";
import Cities from "../Cities/Cities";

function CountryPanel() {
  const films = Cities();

  return (
    <div className="wrapper border border-primary rounded-3 p-4">
      <div className="country">
        <Country>
          <div className="Cities d-flex flex-column gap-3">
            {films.map((item) => (
              <City key={item.id} city={item} />
            ))}
          </div>
        </Country>
      </div>
    </div>
  );
}

export default CountryPanel;

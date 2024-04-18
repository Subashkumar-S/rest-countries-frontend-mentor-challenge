import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ country }) {
    return (
        <Link to={`/country/${country.cca3}`}>
            <div className="w-60 bg-darkBlue rounded">
                <img src={country.flags.png} alt="flag" className="w-60 h-40 rounded-t" />
                <div className="px-4 py-4 flex flex-col gap-2">
                    <h4 className="font-[800] text-xl">{country.name.common}</h4>
                    <p>{country.population}</p>
                    <p>{country.region}</p>
                    {Array.isArray(country.capital) ? (
                        <p>{country.capital.join(", ")}</p>
                    ) : (
                        <p>{country.capital}</p>
                    )}
                </div>
            </div>
        </Link>
    )
}
Card.propTypes = {
    country: PropTypes.shape({
      flags: PropTypes.shape({
        png: PropTypes.string.isRequired
      }).isRequired,
      name: PropTypes.shape({
        common: PropTypes.string.isRequired
      }).isRequired,
      population: PropTypes.number.isRequired,
      region: PropTypes.string.isRequired,
      capital: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]).isRequired,
      cca3: PropTypes.string.isRequired 
    }).isRequired
  };
  
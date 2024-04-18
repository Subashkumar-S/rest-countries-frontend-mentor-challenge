import { Link } from "react-router-dom";

export default function BorderCountry({country}){

    console.log(country);
    return(
        <Link to={`/country/${country}`} className="min-w-20 text-center px-2 py-1 rounded bg-darkBlue">{country}</Link>
    )
}
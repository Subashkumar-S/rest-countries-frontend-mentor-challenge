import { Link } from "react-router-dom";

export default function BorderCountry({name}){
    return(
        <Link className="min-w-20 text-center px-2 py-1 rounded bg-darkBlue">{name}</Link>
    )
}
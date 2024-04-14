import { Link } from "react-router-dom";
import { back } from "../assets";

export default function Back(){
    return(
        <Link to="/" className="flex items-center justify-center gap-2 bg-darkBlue px-8 py-2 rounded  max-sm:my-6 shadow-lg shadow-gray-900">
            <img src={back} alt="back arrow" className="buttonSize" />
            Back
        </Link>
    )
}
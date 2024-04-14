import data from "../../data.json";
import BorderCountries from "./BorderCountries";
import CountryDetails from "./CountryDetails";



export default function Detail() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between padding gap-28">
            <img src={data[0].flag} alt="flag" className="w-72 h-56 sm:w-[40vw] sm:h-[28vw]" />
            <div className="sm:w-1/2 flex flex-col gap-6">
                <CountryDetails />
                <BorderCountries />
            </div>
        </div>

    )
}
import { useState, useEffect } from "react";
import BorderCountries from "./BorderCountries";
import CountryDetails from "./CountryDetails";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function Detail() {
    const {id} = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
            console.log("Response from data:", response.data);
            setCountry(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, [id]);
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between padding gap-28">
            <img src={country?.flags?.png} alt="flag" className="w-72 h-56 sm:w-[40vw] sm:h-[28vw]" />
            <div className="sm:w-1/2 flex flex-col gap-6">
                <CountryDetails country={country}/>
                <BorderCountries borderCountries={country?.borders || []} />
            </div>
        </div>

    )
}
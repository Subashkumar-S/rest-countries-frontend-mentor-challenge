import Card from "./Card"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Container(){

    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            if (response.status !== 200) {
                throw new Error("Failed to fetch countries: " + response.status);
            }
            setCountries(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
      
      console.log(countries);
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center py-8 gap-y-8 padding">
            {countries.map((country) => (
                <Card key={country.cca3} country={country} />
            ))}
        </div>
    )
}
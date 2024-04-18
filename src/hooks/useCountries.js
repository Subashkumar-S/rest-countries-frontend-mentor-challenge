import { useEffect } from "react";
import axios  from "axios";

const useCountries = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        if(!response.ok){
            throw Error("Failed to fetch countries");
        }

        return response.json();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  });
};

export default useCountries;

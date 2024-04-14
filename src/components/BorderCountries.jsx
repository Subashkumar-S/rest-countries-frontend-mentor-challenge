import BorderCountry from "./BorderCountry";

export default function BorderCountries(){

    const borderCountries = ["Congo", "Zambia", "Namibia", "Congo", "Zambia"];

    return(
        <div className="flex gap-4 items-center flex-wrap">
            <h5 className=" text-lg basis-56 flex-1 ">Border Countries :</h5>
            <ul className="flex gap-2 flex-wrap" >
                { borderCountries.map((country) => (
                    <BorderCountry key={country} name={country}/>
                ))

                }
            </ul>
        </div>
    )
}
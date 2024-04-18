import BorderCountry from "./BorderCountry";

export default function BorderCountries({ borderCountries }) {


    return (
        <div className="flex gap-4 items-center flex-wrap">
            <h5 className=" text-lg basis-56">Border Countries :</h5>
            <ul className="flex gap-2 flex-wrap" >
                {borderCountries.length == 0 ?
                    <li>
                        <p>No borders</p>
                    </li> :
                    borderCountries.map((country) => (
                        <BorderCountry country={country} />
                    ))

                }
            </ul>
        </div>
    )
}
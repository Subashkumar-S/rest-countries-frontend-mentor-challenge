import data from "../../data.json";
export default function CountryDetails() {
    return (
        <div className="flex flex-col gap-6 mb-2">
            <h2 className="font-black text-3xl">Spain</h2>
            <div className="flex flex-col sm:flex-row text-lg gap-2 sm:gap-4 flex-wrap leading-10">
                <ul className="">
                    <li>
                        <p>
                            <strong className="pr-2">Native Name:</strong>
                            {data[0].nativeName}
                
                        </p>                
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Population:</strong>
                            {data[0].population}
                        </p>
                    </li>
                    <li>
                        <p> 
                            <strong className="pr-2">Region:</strong>
                            {data[0].region}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Sub Region:</strong>
                            {data[0].subregion}
                            </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Capital:</strong>
                            {data[0].capital}
                        </p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>
                            <strong>Top Level Domain:</strong>
                            {data[0].topLevelDomain}
                            </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Currencies:</strong>
                            {data[0].currencies[0].name}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong className="pr-2">Languages:</strong>
                            {data[0].languages[0].name}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
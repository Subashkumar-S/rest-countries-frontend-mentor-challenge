import data from "../../data.json";
import Card from "./Card"

export default function Container(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center py-8 gap-y-8 padding">
            {data.map((country) => (
                <Card key={country.name} flag={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital} />
            ))}
        </div>
    )
}

export default function Card({ flag, name, population, region, capital }) {
    return (
        <div className="w-60 bg-darkBlue rounded">
            <img src={flag} alt="flag" className="w-60 h-40 rounded-t" />
            <div className="px-4 py-4 flex flex-col gap-2">
                <h4 className="font-[800] text-xl">{name}</h4>
                <p>{population}</p>
                <p>{region}</p>
                <p>{capital}</p>
            </div>
        </div>
    )
}
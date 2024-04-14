import { useState } from "react";
import { down } from "../assets";

export default function Filter() {

    const [clicked, setClick] = useState(false);

    const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

    const handleClick = () => {
        setClick(!clicked);
    }

    return (
        <div className="w-48 py-2 ml-5">
            <div className="w-full h-14 flex items-center justify-between px-6 bg-darkBlue rounded mb-1">
                <p>Filter by region</p>
                <button onClick={handleClick}>
                    <img src={down} alt="down arrow" className="buttonSize text-White" />
                </button>
            </div>
            <ul className={`bg-darkBlue rounded absolute w-48 flex flex-col ${clicked ? ' opacity-100 visible transition ease-out duration-500': ' opacity-0 invisible transition ease-in duration-300'} `}>
                {
                    regions.map((region) => (
                        <li key={region} className="h-14 flex items-center justify-center hover:bg-veryDarkBlue">{region}</li>
                    ))
                }
            </ul>
        </div>
    )
}
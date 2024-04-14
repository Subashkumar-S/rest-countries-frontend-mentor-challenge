import { sun } from "../assets"
export default function Toggle(){
    return(
        <button className="flex items-center gap-1 sm:gap-2">
            <img src={sun} alt="sun"  className="buttonSize "/>
            <p className="font-bold text-md sm:text-lg">Light Mode</p>
        </button>
    )
}
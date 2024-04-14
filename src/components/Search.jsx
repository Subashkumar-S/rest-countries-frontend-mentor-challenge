import { search } from "../assets";

export default function Search(){
    return(
        <form className="bg-darkBlue flex items-center gap-2 w-[90%] sm:w-80 max-sm:mx-auto rounded  p-2 max-sm:my-6" >
            <img src={search} alt="search" className="buttonSize" />
            <input name="countries" placeholder="Search by country" className="outline-none border-none bg-transparent"/>
        </form>
    )
}
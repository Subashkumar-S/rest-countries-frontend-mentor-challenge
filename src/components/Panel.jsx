import { useLocation } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";
import Back from "./Back";

export default function Panel() {
    const location = useLocation();
    return (
        <div className="w-full min-h-32 flex items-start sm:items-center flex-col justify-between sm:flex-row padding">
            {
                location.pathname == "/" ? (
                    <>
                        <Search />
                        <Filter />
                    </>
                ) :
                    (
                        <Back />
                    )
            }
        </div>
    )
}
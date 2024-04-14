import Header from "../components/Header";
import Panel from "../components/Panel";
import Detail from "../components/Detail";

export default function Country(){
    return(
        <section className="bg-veryDarkBlue  text-White w-full min-h-[100vh]">
            <Header />
            <Panel />
            <Detail />
        </section>
    )
}
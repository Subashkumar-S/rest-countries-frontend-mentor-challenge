import Container from "../components/Container";
import Header from "../components/Header";
import Panel from "../components/Panel";


export default function Home() {
    return (
        <section className="w-full min-h-[100vh] bg-veryDarkBlue text-white font-nunito ">
            <Header />
            <Panel />
            <Container />
        </section>
    )
}
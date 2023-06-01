import Hero from "./home-components/Hero.jsx";
import ThreeColumns from "./home-components/ThreeColumns.jsx";
import SingleSteps from "./home-components/SingleSteps.jsx";
import AboutUs from "./home-components/AboutUs.jsx";

function Home() {
    return (
        <>
            <Hero />
            <ThreeColumns />
            <SingleSteps />
            <AboutUs />
        </>
    );
}

export default Home;
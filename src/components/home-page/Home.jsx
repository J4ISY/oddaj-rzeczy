import Hero from "./home-components/Hero.jsx";
import ThreeColumns from "./home-components/ThreeColumns.jsx";
import SingleSteps from "./home-components/SingleSteps.jsx";
import AboutUs from "./home-components/AboutUs.jsx";
import WhoWeHelp from "./home-components/WhoWeHelp.jsx";


function Home() {
    return (
        <>
            <Hero />
            <ThreeColumns />
            <SingleSteps />
            <AboutUs />
            <WhoWeHelp />
        </>
    );
}

export default Home;
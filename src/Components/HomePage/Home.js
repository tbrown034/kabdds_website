import HomeHero from "./HomeHero"
import  MapPackage from "./MapPackage"
import  ReviewPackage from "./ReviewPackage"
import  ServiceBanner from "./ServicesBanner"
import  HeroBanner from "../HeroBanner";

const Home = () => {
    return (
        <div className="myHome">
            <HomeHero />
            <HeroBanner />
            <ReviewPackage />
            <ServiceBanner />
            <MapPackage />
        </div>
    )
}

export default Home;
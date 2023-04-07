import HomeHero from "./HomeHero"
import  MapPackage from "./MapPackage"
import  ReviewPackage from "./ReviewPackage"
import  ServiceBanner from "./ServicesBanner"
import  HeroBanner from "../HeroBanner";
import Footer from "../Footer"

const Home = () => {
    return (
        <div className="myHome">
            <HomeHero />
            <HeroBanner colorType={"primary"} />
            <ReviewPackage />
            <ServiceBanner />
            <MapPackage />
            <Footer colorType={"primary"}/>
        </div>
    )
}

export default Home;
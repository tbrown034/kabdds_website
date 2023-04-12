import HomeHero from "./HomeHero"
import  MapPackage from "./MapPackage"
import  ReviewPackage from "./ReviewPackage"
import  ServiceBanner from "./ServicesBanner"
import  HeroBanner from "../Main/HeroBanner";
import Footer from "../Main/Footer"


const Home = () => {
    return (
        <div className="myHome">
            <HomeHero />
            <HeroBanner colorType={"primary"} />
            <ReviewPackage />
            <ServiceBanner />
            <MapPackage />
            <Footer colorType={"secondary"}/>
        </div>
    )
}

export default Home;
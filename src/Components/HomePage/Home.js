import HomeHero from "./HomeHero"
import  MapPackage from "./MapPackage"
import  ReviewPackage from "./ReviewPackage"
import  ServiceBanner from "./ServicesBanner"
import  HeroBanner from "../Main/HeroBanner";
import Footer from "../Main/Footer"
import Header from "../Main/Header"



const Home = () => {
    return (
        <div className="myHome">
            <Header />
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
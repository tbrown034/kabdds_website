import { Header, Footer, HomeHero, HeroBanner, ReviewPackage, ServicesBanner, MapPackage } from './Components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <HeroBanner />
      <ReviewPackage/>
      <ServicesBanner/>
      <MapPackage />
      {/* <Promotions/> */}
      <Footer />
      
    </div>
  );
}

export default App;

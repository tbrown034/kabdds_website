import { Header, Footer, HomeHero, HeroBanner, ReviewPackage, ServicesBanner, MapPackage, Promotions } from './Components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <HeroBanner />
      <ReviewPackage/>
      <ServicesBanner/>
      <MapPackage />
      <Promotions/>
      <Footer />
      
    </div>
  );
}

export default App;

import { Header, Footer, HomeHero, HeroBanner, ReviewPackage, ServicesBanner } from './Components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <HeroBanner />
      <ReviewPackage/>
      <ServicesBanner/>
      <Footer />
      
    </div>
  );
}

export default App;

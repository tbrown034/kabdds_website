import { Header, Footer, HomeHero, HeroBanner, ReviewPackage, ServicesBanner, HomeMap } from './Components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <HeroBanner />
      <ReviewPackage/>
      <ServicesBanner/>
      <HomeMap />
      <Footer />
      
    </div>
  );
}

export default App;

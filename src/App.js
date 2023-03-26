import { Header, Footer, Home } from './Components';
import About from "./Components/Pages/About";
import Financing from "./Components/Pages/Financing";
import Location from "./Components/Pages/Location";
import Contact from "./Components/Pages/Contact";
import Services from "./Components/Pages/Services";
import FAQs from "./Components/Pages/FAQs";




import { Route, Routes, BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />



      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;

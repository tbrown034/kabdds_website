import { Header, Footer, Home } from './Components';
import About from "./Components/Pages/About";

import { Route, Routes, BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;

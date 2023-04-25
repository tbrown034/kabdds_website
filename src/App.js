import React from "react";
import Header from "./Components/Main/Header";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Main/Footer";
import About from "./Components/Pages/About";
import Financing from "./Components/Pages/Financing";
import Location from "./Components/Pages/Location";
import Contact from "./Components/Pages/Contact";
import Services from "./Components/Pages/Services";
import FAQs from "./Components/Pages/FAQs";
import Appointment from "./Components/Pages/Appointment";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/financing" element={<Financing />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/faqs" element={<FAQs />} />
    </>
  )
);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Header />
        <Routes />
        <Footer />
      </RouterProvider>
    </div>
  );
};

export default App;

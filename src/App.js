import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Locations from "./components/Locations/Locations";
import LocationsOne from "./components/Locations/Location-One/LocationOne";
import LocationsTwo from "./components/Locations/Location-Two/LocationTwo";
import LocationsThree from "./components/Locations/Location-Three/LocationThree";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
          {/* Locations */}
          <Route path="/locations/one" element={<LocationsOne />} />
          <Route path="/locations/two" element={<LocationsTwo />} />
          <Route path="/locations/three" element={<LocationsThree />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

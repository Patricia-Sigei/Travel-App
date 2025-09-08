import { useState } from "react";
import "./App.css";
import Navbar from "./components/Items/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Destinations from "./components/Pages/Destinations";
import Services from "./components/Pages/Services";
import Customers from "./components/UseCase/Customers";
import Footer from "./components/Items/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
        <Services />
        <About />
        <Destinations />
        <Customers />
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;

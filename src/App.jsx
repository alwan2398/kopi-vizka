import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./component/Home";
import Services from "./component/Services";
import Banner from "./component/Banner";
import AppStore from "./component/AppStore";
import Testimoni from "./component/Testimoni";
import Footer from "./component/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <AppStore />
      <Testimoni />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Res from "./components/Res/Res";
import Value from "./components/Value/Value"; // Ensure consistent casing
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/getstarted"; // Ensure consistent casing
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white" />
        <Header />
        <Hero />
      </div>
      <Res />
      <Value />
      <Contact />
      <GetStarted /> 
      <Footer/>
    </div>
  );
}

export default App;

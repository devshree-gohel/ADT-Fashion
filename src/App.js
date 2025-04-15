import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CallUp from "./components/CallUp";
import About from "./components/About";
import Products from "./components/Product";
import Newsletter from "./components/NewsLetter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./App.css";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <CallUp />
        <About />
        <Products />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

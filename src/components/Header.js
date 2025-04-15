import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { homeOutline, searchOutline, personOutline, heartOutline, bagOutline, appsOutline } from "ionicons/icons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header id="header" className={scrolled ? "header-scrolled" : ""}>
        <a href="/" className="logo">Shop</a>
        <ul className="nav">
          <li><a href="#" onClick={scrollToTop}><IonIcon icon={homeOutline} /></a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#products">shopping</a></li>
          <li><a href="#contact">contact us</a></li>
        </ul>
        <ul className="util">
          <li><a href="#"><IonIcon icon={searchOutline} /></a></li>
          <li><a href="#"><IonIcon icon={personOutline} /></a></li>
          <li><a href="#"><IonIcon icon={heartOutline} /></a></li>
          <li>
            <a href="#"><IonIcon icon={bagOutline} /></a>
            <span className="number">8</span>
          </li>
        </ul>
        <a href="#" className={`menu ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <IonIcon icon={appsOutline} />
        </a>
      </header>

      <ul className={`nav-mobile ${menuOpen ? "active" : ""}`}>
        <li><a href="#" onClick={scrollToTop}><IonIcon icon={homeOutline} /></a></li>
        <li><a href="#about" onClick={toggleMenu}>about</a></li>
        <li><a href="#products" onClick={toggleMenu}>shopping</a></li>
        <li><a href="#contact" onClick={toggleMenu}>contact us</a></li>
      </ul>
    </>
  );
};

export default Header;

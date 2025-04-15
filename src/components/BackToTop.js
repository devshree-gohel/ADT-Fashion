import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { arrowUpOutline } from "ionicons/icons";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      className={`back-to-top ${visible ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <IonIcon icon={arrowUpOutline} />
    </a>
  );
};

export default BackToTop;

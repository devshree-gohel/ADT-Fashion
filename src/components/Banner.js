import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  powerOutline,
  cartOutline
} from "ionicons/icons";

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState("");

  const switchBanner = (type) => {
    setActiveBanner(type);
  };

  const resetBanner = () => {
    setActiveBanner("");
  };

  return (
    <div id="banner" className={`banner ${activeBanner}`}>
      {/* Women Section */}
      <div className="women">
        <img src="/images/women-1.jpg" alt="Women" />
        <a href="#" className="switch-btn" onClick={() => switchBanner("left")}>
          Women
        </a>
        <div className="content">
          <h1>Ladies' Fashion</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            facere nulla cum doloremque veritatis harum perferendis deserunt cupiditate qui
          </p>
          <a href="#">Shop around <IonIcon icon={cartOutline} /></a>
        </div>
      </div>

      {/* Men Section */}
      <div className="men">
        <img src="/images/men-1.jpg" alt="Men" />
        <a href="#" className="switch-btn" onClick={() => switchBanner("middle")}>
          Men
        </a>
        <div className="content">
          <h1>Men with Taste</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            facere nulla cum doloremque veritatis harum perferendis deserunt cupiditate qui
          </p>
          <a href="#">Shop around <IonIcon icon={cartOutline} /></a>
        </div>
      </div>

      {/* Special Section */}
      <div className="special">
        <img src="/images/special-2.jpg" alt="Special" />
        <a href="#" className="switch-btn" onClick={() => switchBanner("right")}>
          Special
        </a>
        <div className="content">
          <h1>Be a cool girl</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            facere nulla cum doloremque veritatis harum perferendis deserunt cupiditate qui
          </p>
          <a href="#">Shop around <IonIcon icon={cartOutline} /></a>
        </div>
      </div>

      {/* Reset Button */}
      <a
        href="#"
        className={`reset ${activeBanner ? "active" : ""}`}
        onClick={resetBanner}
      >
        <IonIcon icon={powerOutline} />
      </a>
    </div>
  );
};

export default Banner;

import React from "react";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoYoutube,
  shareSocialOutline,
  chatboxEllipsesOutline,
} from "ionicons/icons";

const Footer = () => {
  return (
    <footer>
      <ul className="sci">
        <li><a href="#"><IonIcon icon={logoFacebook} /></a></li>
        <li><a href="#"><IonIcon icon={logoInstagram} /></a></li>
        <li><a href="#"><IonIcon icon={logoYoutube} /></a></li>
        <li><a className="share" href="#"><IonIcon icon={shareSocialOutline} /></a></li>
      </ul>

      <ul className="footer-nav">
        <li><a href="#">store location</a></li>
        <li><a href="#">opening hours</a></li>
        <li><a href="#">privacy terms</a></li>
      </ul>

      <div className="ask-us">
        <p>Question?</p>
        <a href="#" className="chat">
          <IonIcon icon={chatboxEllipsesOutline} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { IonIcon } from "@ionic/react";
import { mailOpenOutline } from "ionicons/icons";

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="newsletter-box">
        <IonIcon icon={mailOpenOutline} />
        <h4>Sign up for newsletter</h4>
      </div>
      <p>
        Seasonal discount from <span className="discount">20%</span>
      </p>
      <form>
        <input type="text" placeholder="Email" />
        <input type="submit" />
      </form>
    </section>
  );
};

export default Newsletter;

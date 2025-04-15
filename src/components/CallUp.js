import React from "react";
import { IonIcon } from "@ionic/react";
import {
  sendOutline,
  cardOutline,
  cashOutline,
} from "ionicons/icons";

const CallUp = () => {
  return (
    <section className="call-up">
      <div className="call-up-box">
        <IonIcon icon={sendOutline} />
        <div>
          <h4>Free Shipping</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum?
          </p>
        </div>
      </div>

      <div className="call-up-box">
        <IonIcon icon={cardOutline} />
        <div>
          <h4>Security Payment</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum?
          </p>
        </div>
      </div>

      <div className="call-up-box">
        <IonIcon icon={cashOutline} />
        <div>
          <h4>14 Days Return</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum?
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallUp;

import React from "react";
import { IonIcon } from "@ionic/react";
import {
  navigateCircleOutline,
  mailOutline,
  callOutline,
} from "ionicons/icons";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="map">
        <iframe
          title="Google Map"
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://www.google.com/maps?q=28.6139,77.2090&z=15&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="info-wrap">
        <div className="info">
          <IonIcon icon={navigateCircleOutline} />
          <h4>Location:</h4>
          <p>
            123 Your Street <br />
            Your City. State 4000
          </p>
        </div>

        <div className="info">
          <IonIcon icon={mailOutline} />
          <h4>Email:</h4>
          <p>
            info@example.com <br />
            contact@example.com
          </p>
        </div>

        <div className="info">
          <IonIcon icon={callOutline} />
          <h4>Call:</h4>
          <p>
            123456789 <br />
            987543672
          </p>
        </div>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" readOnly />
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Subject" required />
        </div>
        <div className="form-group">
          <textarea name="message" rows="6" placeholder="Message"></textarea>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

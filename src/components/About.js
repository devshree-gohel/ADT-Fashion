import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

const About = () => {
  const boxes = [
    {
      type: "promotion",
      img: "/images/sneaker-4.jpg",
      title: "Promotions * Discount",
    },
    {
      type: "style",
      img: "/images/sunglasses-1.jpg",
      title: "Trending Style",
    },
    {
      type: "collection",
      img: "/images/collection-1.jpg",
      title: "Spring Collection",
    },
    {
      type: "discovery",
      img: "/images/fashion-1.jpg",
      title: "Fashion Discovery",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="left">
        {boxes.slice(0, 2).map((box, idx) => (
          <div key={idx} className={`${box.type} about-box`}>
            <img src={box.img} alt="" />
            <div className="description">
              <h4>{box.title}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
              <a href="#">Shop now <IonIcon icon={arrowForwardOutline} /></a>
            </div>
          </div>
        ))}
      </div>

      <div className="right">
        {boxes.slice(2).map((box, idx) => (
          <div key={idx} className={`${box.type} about-box`}>
            <img src={box.img} alt="" />
            <div className="description">
              <h4>{box.title}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
              <a href="#">Shop now <IonIcon icon={arrowForwardOutline} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

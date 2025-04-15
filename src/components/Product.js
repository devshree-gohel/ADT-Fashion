import React, { useEffect } from "react";
import Isotope from "isotope-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";  // Correct import
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

const productData = [
  { category: "filter-women", img: "/images/shoes-1.png" },
  { category: "filter-women", img: "/images/cloth-1.png" },
  { category: "filter-women", img: "/images/women-3.jpeg" },
  { category: "filter-men", img: "/images/shoes-2.jpeg" },
  { category: "filter-men", img: "/images/shoes-3.jpeg" },
  { category: "filter-special", img: "/images/sunglasses-3.jpeg" },
  { category: "filter-women", img: "/images/cloth-2.jpeg" },
  { category: "filter-women", img: "/images/cloth-3.jpeg" },
  { category: "filter-special", img: "/images/special-1.jpg" },
  { category: "filter-special", img: "/images/special-4.jpg" },
  { category: "filter-men", img: "/images/men-2.jpg" },
  { category: "filter-women", img: "/images/women-2.jpeg" },
];

const Products = () => {
  useEffect(() => {
    const iso = new Isotope(".product-container", {
      itemSelector: ".product-item",
      layoutMode: "fitRows",
      percentPosition: true,
      fitRows: { gutter: 15 },
    });

    const filters = document.querySelectorAll("#product-filters li");
    filters.forEach((el) =>
      el.addEventListener("click", function () {
        filters.forEach((btn) => btn.classList.remove("filter-active"));
        this.classList.add("filter-active");

        const filterValue = this.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
      })
    );
  }, []);

  return (
    <section id="products" className="products">
      {/* Product Filters */}
      <ul id="product-filters">
        <li data-filter="*" className="filter-active">All</li>
        <li data-filter=".filter-women">Women</li>
        <li data-filter=".filter-men">Men</li>
        <li data-filter=".filter-special">Special</li>
      </ul>

      {/* Product Items */}
      <div className="product-container">
        {productData.map((item, idx) => (
          <div className={`product-item ${item.category}`} key={idx}>
            <span className="hot">HOT</span>
            <img src={item.img} alt="" />
            <div className="product-info">
              <ul className="product-rating">
                <li><FontAwesomeIcon icon={starRegular} /></li>
                <li><FontAwesomeIcon icon={starSolid} /></li>
                <li><FontAwesomeIcon icon={starSolid} /></li>
                <li><FontAwesomeIcon icon={starRegular} /></li>
                <li><FontAwesomeIcon icon={starRegular} /></li>
              </ul>
              <h4>Lorem ipsum dolor sit.</h4>
              <p>
                <span className="cross">$180.59</span>
                <span className="price">$125.99</span>
              </p>
            </div>
            <a href="#" className="add-to-bag">
              <FontAwesomeIcon icon={faBagShopping} />
            </a>
          </div>
        ))}
      </div>

      <div className="loading-more">
        <a href="#">explore more <IonIcon icon={arrowForwardOutline} /></a>
      </div>
    </section>
  );
};

export default Products;

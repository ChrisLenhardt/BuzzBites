import React from "react"; // Import React to use JSX

import Header from "./header";
import Italian from "./italian";
import Indian from "./indian";
import Middle from "./middle";
import Western from "./western";
import picture from "./images/yellowting.png";
import picture2 from "./images/homepasta.png";
import picture3 from "./images/ButterChicken.jpg";
import picture4 from "./images/Bowl.jpg";
import picture5 from "./images/paneer.jpg";

export default function Home() {
  
  return (
    <div id="root">
      <div className="temp">
        <Header />
      </div>
      <div className="yellow">
        <div className="text-boxes">
          <div className="text-box">
            <p className="orange-text">ARE YOU HUNGRY?</p>
            <p className="white-text bigger-text">DON'T WAIT!</p>
            <p className="white-text smaller-text">
              this is just a test of the paragraph
            </p>
            <button className="orange-button">ORDER NOW</button>
          </div>
          <div className="image-container">
            <img src={picture} alt="Picture 1" />
            <img src={picture2} alt="Picture 2" className="overlay-image" />
          </div>
        </div>
      </div>
      <div class="new-section">
        <div class="newtitle">
        <h2>WHAT'S ON THIS WEEK'S MENU</h2>
        </div>
        <div class="menucards">
              <div class="card-content">
                <h3 class="dish-name">Dish Name</h3>
                <img src={picture3} alt="Picture 2" className="cardimg" />
                <p class="dish-price">$10.99</p>
                <button className="order-button">Order</button>
            </div>
            <div class="card-description">
                <p class="description-text">Description of the dish.</p>
            </div>
        </div>
        <div class="menucards">
              <div class="card-content">
                <h3 class="dish-name">Dish Name</h3>
                <img src={picture4} alt="Picture 2" className="cardimg"/>
                <p class="dish-price">$10.99</p>
                <button className="order-button">Order</button>
            </div>
            <div class="card-description">
                <p class="description-text">Description of the dish.</p>
            </div>
        </div>
        <div class="menucards">
              <div class="card-content">
                <h3 class="dish-name">Dish Name</h3>
                <img src={picture5} alt="Picture 2" className="cardimg"/>
                <p class="dish-price">$10.99</p>
                <button className="order-button">Order</button>
            </div>
            <div class="card-description">
                <p class="description-text">Description of the dish.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

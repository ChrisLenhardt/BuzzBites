import React from "react"; // Import React to use JSX

import Header from "./header";
import Italian from "./italian";
import Indian from "./indian";
import Middle from "./middle";
import Western from "./western";
import picture from "./images/yellowting.png";
import picture2 from "./images/homepasta.png";


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
      </div>
    );
  }


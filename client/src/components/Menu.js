import React from "react";
import Header from "./header";
import picture from "./images/ButterChicken.jpg";
import gyro from "./images/Gyro.jpg";
import picture2 from "./images/chick.jpg";
import picture3 from "./images/sss.jpg";
import herb from "./images/HerbChicken.jpg";
import veg from "./images/VegShawarma.jpg"; 
import bowl from "./images/Bowl.jpg";
import Tomat from "./images/RoastedTomatPasta.jpg"
import chow from "./images/chow.jpg"
import alfredo from "./images/MushroomAlfredo.jpg";
import pepper from "./images/PepperPasta.jpg"
import paneer from "./images/paneer.jpg"



export default function Menu() {
  return (
    <div>
      <Header />
      
        <h1 class = "menuTitle">Welcome to Our Menu</h1>

      <div className="India-content">
        <h1 class = "IndiaTitle">Indian</h1>
        <div>
        <img class = "Indian3" src={paneer} alt="Butter Chicken" />
        </div>
        <div>
        <img class = "Indian2" src={chow} alt="Butter Chicken" />
        </div>
        <div>
        <img class = "Indian1" src={picture} alt="Butter Chicken" />
        </div>
      </div>
      

      <div className="Middle-content">
        <h1 class = "MiddleTitle">Middle East</h1>
        <div>
        <img class = "Middle1" src={gyro} alt="Butter Chicken" />
        </div>
        <div>
        <img class = "Middle2" src={veg} alt="Butter Chicken" />
        </div>
        <div>
        <img class = "Middle3" src={bowl} alt="Butter Chicken" />
        </div>  
      </div>

    <div>
      <h1 class = "ItalianTitle">Italian-American</h1>
    </div>
    <div>
        <img class = "Italian3" src={pepper} alt="Butter Chicken" />
    </div>
    <div>
        <img class = "Italian1" src={Tomat} alt="Butter Chicken" />
    </div>
    <div>
        <img class = "Italian2" src={alfredo} alt="Butter Chicken" />
    </div>
    


    </div>
  );
}
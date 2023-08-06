import React from 'react';
import { Link } from 'react-router-dom';
import picture from "./images/MushroomAlfredo.jpg";
import picture2 from "./images/RoastedTomatPasta.jpg";
import picture3 from "./images/sss.jpg";

const Italian = ({ dishes }) => {
  return (
    <div>
      <section id="photos">
        <div className="pcontainer">
          <Link to="/dish/mushroom-alfredo" className="darken">
            <img src={picture} alt="Mushroom Alfredo" />
            <span>Mushroom Alfredo</span>
          </Link>
        </div>
        <div className="pcontainer">
          <Link to="/dish/roasted-tomato-pasta" className="darken">
            <img src={picture2} alt="Roasted Tomato-Pepper Pasta" />
            <span>Roasted Tomato-Pepper Pasta</span>
          </Link>
        </div>
        <div className="pcontainer">
          <Link to="/dish/sesame-chicken" className="darken">
            <img src={picture3} alt="Sesame Chicken" />
            <span>Sesame Chicken</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Italian;

import React from 'react';
import { Link } from 'react-router-dom';
import picture from "./images/HerbChicken.jpg";
import picture2 from "./images/chick.jpg";
import picture3 from "./images/sss.jpg";

const Western = ({ dishes }) => {
  return (
    <div>
      <section id="photos">
        <div className="pcontainer">
          <Link to="/dish/herb-chicken" className="darken">
            <img src={picture} alt="Herb Chicken" />
            <span>Herb Chicken</span>
          </Link>
        </div>
        <div className="pcontainer">
          <Link to="/dish/chicken-kadai" className="darken">
            <img src={picture2} alt="Chicken Kadai" />
            <span>Chicken Kadai</span>
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

export default Western;

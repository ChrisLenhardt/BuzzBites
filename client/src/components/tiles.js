import { InstagramEmbed } from 'react-social-media-embed';
import picture from "./images/pasta.jpg"
import picture2 from "./images/chick.jpg"
import picture3 from "./images/sss.jpg"
import picture4 from "./images/Soup.JPG"
export default function Tiles() {
    return (
    <div>
      <h2 class="subTitle">
                On Today's Menu
            </h2>
      <div class="section-fluid-main">
        <div class="section-row">
          <div class="section-col">
            <div class="section">
              <div class="section-in">
                <img src={picture} alt=""></img>
              </div>
            </div>
          </div>
          <div class="hover-text">
            <h2>Tomato Fettucine</h2>
          </div>
          <div class="section-col">
            <div class="section">
              <div class="section-in">
                <img src={picture2} alt=""></img>
              </div>
            </div>
          </div>
          <div class="hover-text">
            <h2>Chicken Kadahi</h2>
          </div>
          <div class="section-col">
            <div class="section">
              <div class="section-in">
                <img src={picture3} alt=""></img>
              </div>
            </div>
          </div>
          <div class="hover-text">
            <h2>Soy-Scallion griled chicken</h2>
          </div>	
          <div class="section-col">
            <div class="section">
              <div class="section-in">
                <img src={picture4} alt=""></img>
              </div>
            </div>
          </div>
          <div class="hover-text">
            <h2>Roasted Tomato-Pepper Soup</h2>
          </div>
        </div>
      </div>
    </div>
 )}
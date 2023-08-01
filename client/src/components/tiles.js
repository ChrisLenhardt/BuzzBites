import { InstagramEmbed } from 'react-social-media-embed';
import picture from "./images/pasta.jpg"
import picture2 from "./images/chick.jpg"
import picture3 from "./images/sss.jpg"
export default function Tiles() {
    return (
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
          <h2>prasun's pasta</h2>
        </div>
        <div class="section-col">
          <div class="section">
            <div class="section-in">
              <img src={picture2} alt=""></img>
            </div>
          </div>
        </div>
        <div class="hover-text">
          <h2>prasun's chicken</h2>
        </div>
        <div class="section-col">
          <div class="section">
            <div class="section-in">
              <img src={picture3} alt=""></img>
            </div>
          </div>
        </div>
        <div class="hover-text">
          <h2>prasun's chicken again</h2>
        </div>	
      </div>
    </div>
 )}
import { InstagramEmbed } from 'react-social-media-embed';
import picture from "./images/MushroomAlfredo.jpg"
import picture2 from "./images/RoastedTomatPasta.jpg"
import picture3 from "./images/sss.jpg"
export default function Italian() {
    return (
    <div>
      <section id="photos">
        <div class="pcontainer">
          <a class="darken"><img src={picture}></img><span>Mushroom Alfredo</span></a>
        </div>
        <div class="pcontainer">
          <a class="darken"><img src={picture2}></img><span>Roasted Tomato-Pepper Pasta</span></a>
        </div>
        <div class="pcontainer">
          <a class="darken"><img src={picture3}></img><span>Sesame Chicken</span></a>
        </div>
      </section>
    </div>
 )}
import picture from "./images/HerbChicken.jpg"
import picture2 from "./images/chick.jpg"
import picture3 from "./images/sss.jpg"
export default function Western() {
    return (
    <div>
      <section id="photos">
        <div class="pcontainer">
          <a class="darken"><img src={picture}></img><span>Herb Chicken</span></a>
        </div>
        <div class="pcontainer">
          <a class="darken"><img src={picture2}></img><span>Chicken Kadai</span></a>
        </div>
        <div class="pcontainer">
          <a class="darken"><img src={picture3}></img><span>Sesame Chicken</span></a>
        </div>
      </section>
    </div>
 )}
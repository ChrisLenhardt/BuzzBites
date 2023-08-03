import picture from "./images/pasta.jpg"
import picture2 from "./images/chick.jpg"
import picture3 from "./images/sss.jpg"
import picture4 from "./images/Soup.JPG"
export default function Western() {
    return (
    <div>
      <h2 class="subTitle">
                This Week's Menu
            </h2>
      <section id="photos">
        <div class="pcontainer">
          <a class="darken"><img src={picture}></img><span>Tomato Fettucine</span></a>
        </div>
        <div class="pcontainer">
          <a class="darken"><img src={picture2}></img><span>Chicken Kadai</span></a>
        </div>
        <div class="pcontainer">
          <a class="darken"><img src={picture3}></img><span>Sesame Chicken</span></a>
        </div>
        <div class="pcontainer">
          <a class="darken"><img src={picture4}></img><span>Tomato Soup</span></a>
        </div>
      </section>
    </div>
 )}
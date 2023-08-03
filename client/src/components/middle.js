import picture from "./images/ChickenGyro.jpg"
import picture2 from "./images/chick.jpg"
import picture3 from "./images/sss.jpg"
export default function Middle() {
    return (
    <div>
      <h2 class="subTitle">
                This Week's Menu
            </h2>
      <section id="photos">
        <div class="pcontainer">
          <a class="darken"><img src={picture}></img><span>Chicken Gyro</span></a>
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
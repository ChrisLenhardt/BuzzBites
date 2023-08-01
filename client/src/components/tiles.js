import { InstagramEmbed } from 'react-social-media-embed';
import picture from "./images/pasta.jpg"
import picture2 from "./images/chick.jpg"
import picture3 from "./images/sss.jpg"
export default function Tiles() {
    return (
      <div>
          <div class="tiles">
            <img src={picture}>
            </img>
            <img src={picture2}>
            </img>
            <img src={picture3}>
            </img>
          </div>
      </div>
    )}
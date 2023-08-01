import { InstagramEmbed } from 'react-social-media-embed';
import picture from "./images/pasta.jpg"
import picture2 from "./images/chick.jpg"
import picture3 from "./images/sss.jpg"
export default function Tiles() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={picture} alt=''></img>
          <img src={picture2} alt=''></img>
          <img src={picture3} alt=''></img>
        </div>
      </div>
    )}
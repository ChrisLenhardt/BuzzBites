import picture from "./images/cart.png"
export default function Cart(){
    return(
        <div id="cartButton">
            <a href="/cart">
            <img src={picture} />
            </a>
        </div>
    );
}
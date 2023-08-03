import Header from "./header";
import Tiles from "./tiles";

export default function ShoppingCart () {
    return(
        <div>
        <Header />
        <h1>Shopping Cart</h1>
        <ul id="cart-list">
        </ul>
        <div id="subtotal">
          <p>Subtotal: <span id="subtotal-amount">$0.00</span></p>
          <p>Tax: <span id="tax-amount">$0.00</span></p>
          <p>Total: <span id="total-amount">$0.00</span></p>
        </div>
        </div>
    )
}
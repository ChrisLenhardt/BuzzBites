import Cart from "./cart";

export default function Header() {
  return (
    <div>
      <div class="header">
        <h1 class="headerTitle">buzz</h1>
        <h1 class="headerTitle2">BITES</h1>
        <div class="navBar">
          <h1 class="navTitles">HOME</h1>
          <h1 class="navTitles">MENU</h1>
        </div>

        <Cart />
      </div>
    </div>  
  );
}

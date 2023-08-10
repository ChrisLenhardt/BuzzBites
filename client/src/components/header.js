import Cart from "./cart";

export default function Header() {
  return (
    <div>
      <div className="header">
        <h1 className="headerTitle">buzz</h1>
        <h1 className="headerTitle2">BITES</h1>
        <div className="navBar">
          <a href="/" className="navTitles">HOME</a>
          <a href="/Menu" className="navTitles">MENU</a>
        </div>

        <Cart />
      </div>
    </div>  
  );
}
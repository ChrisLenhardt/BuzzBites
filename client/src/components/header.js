import Cart from "./cart";

export default function Header(){
    return(
            <div class="header">
            <h1 class="headerTitle">
                <a href="/" class="type1Link">BuzzBites</a>
            </h1>
            
            <Cart />

 
        </div>
    );
}
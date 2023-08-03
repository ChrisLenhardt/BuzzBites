import Cart from "./cart";

export default function Header(){
    return(
            <div class="header">
            <h1 class="headerTitle">
                <a href="/" class="type1Link">BuzzBites</a>
            </h1>
            
            <Cart />

            <h2 class="subTitle">
                This Week's Menu
            </h2>  
        </div>
    );
}
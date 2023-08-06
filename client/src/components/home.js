import Header from "./header";
import Italian from "./italian";
import Indian from "./indian";
import Middle from "./middle";
import Western from "./western";

export default function Home () {
    return (
        <div id="root">
        <Header></Header>
        <h2 class="subTitle">
            This Week's Menu
        </h2> 
        <Italian />
        </div>
    );
}
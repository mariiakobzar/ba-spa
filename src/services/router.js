import Root from "../components/Root";
import About from "../components/Root/about";
import Shop from "../components/Root/shop";

// Router implementation has to be defined here
// class Router {
//   locations = {
//     '/': Root(),
//     '/about': about.js
//   }
// }

let Router = {
    '/': Root(),
    '/shop': Shop(),
    '/about': About()
}

export default Router;

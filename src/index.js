import Router from './services/router.js';
import './assets/styles/index.scss';

// document.getElementById('app').innerHTML = Root();

let contentDiv = document.getElementById('app');

window.onpopstate = () => {
  contentDiv.innerHTML = Router[window.location.pathname];
}

function onNavItemClick(pathName) {
  console.log(pathName);
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = Router[pathName];
}

document.getElementById('about').addEventListener("click", function(e){
  onNavItemClick("/about");
  }, false);

  document.getElementById('shop').addEventListener("click", function(e){
    onNavItemClick("/shop");
    }, false);

    document.getElementById('home').addEventListener("click", function(e){
      onNavItemClick("/");
      }, false);

contentDiv.innerHTML = Router[window.location.pathname];


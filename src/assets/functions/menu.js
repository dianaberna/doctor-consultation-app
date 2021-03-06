import { getIntro } from 'Function/page'

function hideMenu(ul){
    document.getElementById("main__page__menu__item").style.display = "none"
    let buttonMenu = document.getElementById("main__page__menu__bar");
    buttonMenu.onclick = function(){
        showMenu();
    }
}
  
function showMenu(ul){
    document.getElementById("main__page__menu__item").style.display = "block";
    let buttonMenu = document.getElementById("main__page__menu__bar");
    buttonMenu.onclick = function(){
        hideMenu(ul);
    }
}
  
export function generateMenu(ul){
    showMenu(ul);
    let li = document.createElement("li");
    let span = document.createElement("span");
    let text = document.createTextNode("Get started");

    span.appendChild(text)
    span.onclick = function(){
        getIntro();
    }
    li.appendChild(span);
    ul.appendChild(li);
}
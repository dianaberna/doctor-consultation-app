import { getMainpage, getIntro } from './page'
import { printDoctorsList } from './doctor';

import iconSearch from '../src/assets/images/search.svg';
import iconBack from '../src/assets/images/back.svg';


export function createContent(tag, text, id) {
    const isContent = document.createElement(tag);
    if( id ) isContent.setAttribute("id", id)
    isContent.appendChild(document.createTextNode(text));
    return isContent;
}

function search(categoriesList, doctorsList){
    var input = document.getElementById("search__input");

    var result = doctorsList
        .filter(doc => doc.firstname.toLowerCase() === input.value.toLowerCase());

    resetDoctorList(categoriesList, doctorsList);
    var page = document.getElementById("doctor__list--result");
    page.innerHTML = "";
    input.value = "";

    if(result.length == 0){
        page.appendChild(createContent("p", "No results"));
    }else{  
        printDoctorsList(page, categoriesList, result);
    }
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function resetDoctorList(categoriesList, doctorsList){
    var title = document.getElementById("doctor__list--title");
    // delete precedent reset button
    removeAllChildNodes(title);
    // rewrite title of doctors list
    title.appendChild(createContent("h2", "Top Doctors"));
    // create reset button 
    var input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("id", "doctor__list--reset");
    input.setAttribute("class", "btn")
    input.setAttribute("value", "reset");
    input.onclick = function(){
        // clean doctor list
        var page = document.getElementById("doctor__list--result");
        page.innerHTML = "";
        printDoctorsList(page, categoriesList, doctorsList);
        // remove reset button
        var button = document.getElementById("doctor__list--reset");
        title.removeChild(button)
    }
    title.appendChild(input);
}

export function printSearchBar(page, categoriesList,  doctorsList){

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","search__input");
    input.setAttribute("placeholder","Search for doctors")
    page.appendChild(input);
  
    var input = document.createElement("input");
    input.setAttribute("type","submit");
    input.setAttribute("id","search__submit"); 
    input.setAttribute("value","");
    input.onclick = function(){ 
        search(categoriesList, doctorsList);
    };
    input.style.cssText = `background-image: url(${iconSearch})`;
    page.appendChild(input);
}

export function back(categoriesList, doctorsList){
    // create button in doctor details page for return to main page
    var input = document.createElement("input");
    input.setAttribute("type","button");
    input.setAttribute("id","doctor__page__menu--back");
    input.onclick = function() { getMainpage(categoriesList, doctorsList); };
    input.style.cssText = `background-image: url(${iconBack})`;

    return input;
  }

export function reset(){
    document.getElementById("content").innerHTML = "";
}

function hideMenu(ul){
    document.getElementById("main__page__menu__item").style.display = "none"
    var buttonMenu = document.getElementById("main__page__menu__bar");
    buttonMenu.onclick = function(){showMenu();}
}
  
function showMenu(ul){
    document.getElementById("main__page__menu__item").style.display = "block";
    var buttonMenu = document.getElementById("main__page__menu__bar");
    buttonMenu.onclick = function(){
        hideMenu(ul);
    }
}
  
export function generateMenu(ul, categoriesList, doctorsList){
    showMenu(ul);
    var li = document.createElement("li");
    var span = document.createElement("span");
    var text = document.createTextNode("Get started");
    span.appendChild(text)
    span.onclick = function(){
        getIntro(categoriesList, doctorsList);
    }
    li.appendChild(span);
    ul.appendChild(li);
}

export function newImage(w, h, src, id, classCss){
    var image = new Image(w,h);
    image.src = src;
    image.id = id;
    image.class = classCss;
    return image;
  }
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
    var input = document.getElementById("textSearch");

    var result = doctorsList
        .filter(doc => doc.firstname.toLowerCase() === input.value.toLowerCase());

    resetDoctorList(categoriesList, doctorsList);
    var page = document.getElementById("result-doctor");
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
    var title = document.getElementById("title-doctor");
    // delete precedent reset button
    removeAllChildNodes(title);
    // rewrite title of doctors list
    title.appendChild(createContent("h2", "Top Doctors"));
    // create reset button 
    var input = document.createElement("input");
    input.setAttribute("type", "button");
    input.setAttribute("id", "reset-doctor");
    input.setAttribute("class", "button")
    input.setAttribute("value", "reset");
    input.onclick = function(){
        // clean doctor list
        var page = document.getElementById("result-doctor");
        page.innerHTML = "";
        printDoctorsList(page, categoriesList, doctorsList);
        // remove reset button
        var button = document.getElementById("reset-doctor");
        title.removeChild(button)
    }
    title.appendChild(input);
}

export function printSearchBar(page, categoriesList,  doctorsList){

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","textSearch");
    input.setAttribute("placeholder","Search for doctors")
    page.appendChild(input);
  
    var input = document.createElement("input");
    input.setAttribute("type","submit");
    input.setAttribute("id","submitSearch");
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
    input.setAttribute("id","back");
    input.onclick = function() { getMainpage(categoriesList, doctorsList); };
    input.style.cssText = `background-image: url(${iconBack})`;

    return input;
  }

export function reset(){
    document.getElementById("content").innerHTML = "";
}


// hide menu
function closeMenu(ul){
    document.getElementById("menu-element").style.display = "none"
    var buttonMenu = document.getElementById("menu-bar");
    buttonMenu.onclick = function(){openMenu();}
}
  
// show menu
function openMenu(ul){
    document.getElementById("menu-element").style.display = "block";
    var buttonMenu = document.getElementById("menu-bar");
    buttonMenu.onclick = function(){
        closeMenu(ul);
    }
}
  
export function generateMenu(ul, categoriesList, doctorsList){
    openMenu(ul);
    var li = document.createElement("li");
    var span = document.createElement("span");
    var text = document.createTextNode("Get started");
    span.appendChild(text)
    span.onclick = function(){
        console.log("home")
        getIntro(categoriesList, doctorsList);
    }
    li.appendChild(span);
    ul.appendChild(li);
}
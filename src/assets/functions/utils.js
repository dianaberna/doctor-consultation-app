import { getMainpage } from './page'

import iconBack         from 'Image/back.svg';
import bgDoctor         from 'Image/bgdoctor.png';
import iconDental       from 'Image/dental.png';
import iconHeart        from 'Image/heart.svg';
import iconEye          from 'Image/eye.svg';
import consultation1    from 'Image/cons1.png';
import consultation2    from 'Image/cons2.png';

export function createContent(tag, text, id) {
    const isContent = document.createElement(tag);
    if( id ) isContent.setAttribute("id", id)
    isContent.appendChild(document.createTextNode(text));
    return isContent;
}

// create banner in doctor details page
export function createBanner(){
    const div = document.createElement('div');
    div.className= "doctor__page--image";
    div.style.cssText = `background-image: url(${bgDoctor})`;
    return div;
}

export function printUpcomingSchedules(){
    const div = document.createElement('div');
    div.className = "doctor__upcoming-schedules";

    div.appendChild(createContent("h2", "Upcoming Schedules"));

    div.appendChild(newImage(325, 87, consultation1));
    div.appendChild(newImage(325, 87, consultation2));

    return div;
}

export function reset(){
    document.getElementById("content").innerHTML = "";
}

export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function back(categoriesList, doctorsList){
    // create button in doctor details page for return to main page
    let input = document.createElement("input");
    input.setAttribute("type","button");
    input.setAttribute("id","doctor__page__menu--back");
    input.onclick = function() { getMainpage(categoriesList, doctorsList); };
    input.style.cssText = `background-image: url(${iconBack})`;

    return input;
}

export function newImage(w, h, src, id, classCss){
    let image = new Image(w,h);
    image.src = src;
    image.id = id;
    image.class = classCss;
    return image;
}

export function getIcon(id){
    switch(id){
      case 1: return iconDental;
      case 2: return iconHeart;
      case 3: return iconEye;
    }
}
import { createContent } from './generic'

import iconDental from '../src/assets/images/dental.png';
import iconHeart from '../src/assets/images/heart.svg';
import iconEye from '../src/assets/images/eye.svg';

function getIcon(id){
    switch(id){
      case 1: return iconDental;
      case 2: return iconHeart;
      case 3: return iconEye;
    }
}

export function printCategoriesList(page, categoriesList){
    page.appendChild(createContent("h2", "Categories"));
    var div = document.createElement("div");
    div.className= "container-categories";
    page.appendChild(div);


    categoriesList.forEach(element => {
        var item = `<div class="item" onclick="categoriesPage(${element.id})"><div class="icon ${element.classCSS}"><img src="`+getIcon(element.id)+`"></div><h3>${element.name} </h3></div>`;
        div.insertAdjacentHTML("beforeend", item);
      });
}



/*
var cat = "Dental Surgeon";
    var item =`<div class="item"><div class="icon dental"><img src="${iconDental}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
    cat = "Heart Surgeon";
    item =`<div class="item"><div class="icon heart"><img src="${iconHeart}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
    cat = "Eye Specialist";
    item =`<div class="item"><div class="icon eye"><img src="${iconEye}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
     */
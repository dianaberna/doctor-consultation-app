import './assets/css/main__page.scss';

import { createContent, resetDoctorList } from './generic'
import { printDoctorsList } from './doctor'

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

function categoriesSearch(categoriesList, doctorList, id){

  var resultcat = categoriesList
    .filter(cat => cat.id === id);
  
  var result = doctorList
    .filter(doc => doc.categories == resultcat[0].name)

  resetDoctorList(categoriesList, doctorList);

  var page = document.getElementById("doctor__list--result");
  page.innerHTML = "";
  if(result.length == 0){
    page.appendChild(createContent("p", "No results"));
  }else{  
      printDoctorsList(page, categoriesList, result);
  }
}

export function printCategoriesList(page, categoriesList, doctorList){
  
  var div = document.createElement("div");
  div.id= "categories__list";
  
  categoriesList.forEach(element => {
    var item = document.createElement("div")
    item.className = "categories__list--item";
    item.onclick = function(){ categoriesSearch(categoriesList, doctorList, element.id);}

    var icon = document.createElement("div");
    icon.className = "categories__list--icon "+element.classCSS;

    var image = new Image(35, 35);
    image.src = getIcon(element.id);
    icon.appendChild(image);

    item.appendChild(icon);
    item.appendChild(createContent("h3",element.name))
    div.appendChild(item)

  });

  page.appendChild(div);
}
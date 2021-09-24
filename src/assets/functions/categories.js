import '../css/main__page.scss';

import { createContent, newImage, getIcon } from './utils'
import { categoriesSearch } from './searchbar';

import categoriesJson from '../categories.json';

import Category from '../class/Category';


export function createCategoriesList() {
  const listCategories = categoriesJson.categoriesList;
  return listCategories.map( function(category) {
      return new Category(category.id, category.name, category.image, category.classCSS)
  })
}

export function printCategoriesList(page, categoriesList, doctorList){
  
  let div = document.createElement("div");
  div.id= "categories__list";
  
  categoriesList.forEach(element => {
    let item = document.createElement("div")
    item.className = "categories__list--item";
    item.onclick = function(){ categoriesSearch(categoriesList, doctorList, element.id);}

    let icon = document.createElement("div");
    icon.className = "categories__list--icon "+element.classCSS;

    icon.appendChild(newImage(35, 35, getIcon(element.id), element.id));

    item.appendChild(icon);
    item.appendChild(createContent("h3",element.name))
    div.appendChild(item)

  });

  page.appendChild(div);
}
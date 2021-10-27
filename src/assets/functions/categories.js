import '../css/main__page.scss';

import { createContent, newImage, getIcon } from './utils'
import { categoriesSearch } from './searchbar'

import * as CategoryService from 'Service/CategoryService'

export async function printCategoriesList(page){
  
  let div = document.createElement("div");
  div.id= "categories__list";

  let categories = await CategoryService.fetchAll(); 

  categories.forEach(category => {
    
    let item = document.createElement("div")
    item.className = "categories__list--item";

    item.onclick = function(){ 
      categoriesSearch(category.id);
    }

    let icon = document.createElement("div");
    icon.className = "categories__list--icon "+category.classCSS;

    icon.appendChild(newImage(35, 35, getIcon(category.id), category.id));

    item.appendChild(icon);
    item.appendChild(createContent("h3",category.name))

    div.appendChild(item)

  });
  page.appendChild(div);

}
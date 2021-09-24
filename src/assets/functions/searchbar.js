import { printDoctorsList, resetDoctorList } from '../functions/doctor'
import iconSearch from '../images/search.svg';

function search(categoriesList, doctorsList){
    let input = document.getElementById("search__input");

    let result = doctorsList
        .filter(doc => doc.firstname.toLowerCase() === input.value.toLowerCase());

    resetDoctorList(categoriesList, doctorsList);
    let page = document.getElementById("doctor__list--result");
    page.innerHTML = "";
    input.value = "";

    if(result.length == 0){
        page.appendChild(createContent("p", "No results"));
    }else{  
        printDoctorsList(page, categoriesList, result);
    }
}

export function printSearchBar(page, categoriesList,  doctorsList){

    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","search__input");
    input.setAttribute("placeholder","Search for doctors")
    page.appendChild(input);
  
    input = document.createElement("input");
    input.setAttribute("type","submit");
    input.setAttribute("id","search__submit"); 
    input.setAttribute("value","");
    input.onclick = function(){ 
        search(categoriesList, doctorsList);
    };
    input.style.cssText = `background-image: url(${iconSearch})`;
    page.appendChild(input);
}

export function categoriesSearch(categoriesList, doctorList, id){

    let resultcat = categoriesList
      .filter(cat => cat.id === id);
    
    let result = doctorList
      .filter(doc => doc.categories == resultcat[0].name)
  
    resetDoctorList(categoriesList, doctorList);
  
    let page = document.getElementById("doctor__list--result");
    page.innerHTML = "";
    if(result.length == 0){
      page.appendChild(createContent("p", "No results"));
    }else{  
        printDoctorsList(page, categoriesList, result);
    }
  }
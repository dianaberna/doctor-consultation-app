import { printDoctorsList, resetDoctorList } from 'Function/doctors'
import { createContent } from 'Function/utils'

import iconSearch from 'Image/search.svg';
import * as DoctorService from "Service/DoctorService";
import * as CategoryService from "Service/CategoryService";

export async function search(){

    let input   = document.getElementById("search__input").value.toLowerCase();
    
    resetDoctorList();
    
    let page    = document.getElementById("doctor__list--result");
    page.innerHTML = "";
    
    if(input.length > 0)
    {
        let result = await DoctorService.searchByName(input);   
        return (result.length === 0 ? page.appendChild(createContent("p", "No results")) : printDoctorsList(page, result));
    }
    
    await printDoctorsList(page);
}

export function printSearchBar(page){

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
        search();
    };
    input.style.cssText = `background-image: url(${iconSearch})`;
    page.appendChild(input);
}

export function categoriesSearch(id){

    let resultCategory = CategoryService.fetch(id);

    let categoryDoctors = DoctorService.searchByCategoryName(resultCategory.name) 

    printResultSearch(categoryDoctors);
}

function printResultSearch(result){
    resetDoctorList();

    let page = document.getElementById("doctor__list--result");
  
    page.innerHTML = "";

    return (result.length > 0) ? printDoctorsList(page, result) : page.appendChild(createContent("p", "No results")); 
}
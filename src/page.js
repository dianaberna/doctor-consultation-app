import { createContent, printSearchBar } from './generic'
import { printDoctorsList } from './doctor'
import { printCategoriesList } from './categories';

export function getIntro(doctorsList){
    const page = document.createElement('div');
    page.className= "homepage";
    page.appendChild(createContent("h1", "Choose The Doctor You Want"));
    page.appendChild(createContent("p", "Lorem ipsum dolor amet, consectetur adipiscing inet deli"));
    
    const button = document.createElement("button");
    button.className = "button";
    button.onclick = function() { contentPage("content", doctorsList); };
    button.appendChild(document.createTextNode("Get started"));
    page.appendChild(button);
    return page;
  }


  
  
  function doctorPage(doctor){
    // reset page
    document.getElementById("content").innerHTML = "";
  }

function contentPage(id, doctorsList) {
    // reset page
    document.getElementById(id).innerHTML = "";
  
    // print title
    const page = document.createElement('div');
    document.getElementById(id).appendChild(page);
    page.className= "getstarted";
    page.appendChild(createContent("h1", "Find Your Desired Doctor"));
  
    // print search bar and button
    printSearchBar(page);
  
    // categories section

  
    printCategoriesList(page);
  
    // top doctors section 

    page.appendChild(createContent("h2", "Top Doctors"));
    
    //print doctor list 
    printDoctorsList(page, doctorsList);
    
  }
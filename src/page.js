import { createContent, printSearchBar } from './generic'
import { printDoctorsList } from './doctor'

import iconDental from '../assets/img/dental.png';
import iconHeart from '../assets/img/heart.svg';
import iconEye from '../assets/img/eye.svg';


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
    page.appendChild(createContent("h2", "Categories"));
    var div = document.createElement("div");
    div.className= "container-categories";
    page.appendChild(div);
  
    var cat = "Dental Surgeon";
    var item =`<div class="item"><div class="icon dental"><img src="${iconDental}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
    cat = "Heart Surgeon";
    item =`<div class="item"><div class="icon heart"><img src="${iconHeart}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
    cat = "Eye Specialist";
    item =`<div class="item"><div class="icon eye"><img src="${iconEye}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
  
    // top doctors section 

    page.appendChild(createContent("h2", "Top Doctors"));
    var div = document.createElement("div");
    div.className= "container-top";
    page.appendChild(div);
    //print doctor list 
    printDoctorsList(page, doctorsList);
    
  }
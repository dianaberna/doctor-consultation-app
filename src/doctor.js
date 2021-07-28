import { createContent } from './generic'

import avatar1 from '../src/assets/images/avatar1.svg';
import avatar2 from '../src/assets/images/avatar2.svg';
import avatar3 from '../src/assets/images/avatar3.svg';

// TODO: improve
function getAvatar(id){
  switch(id){
    case 1: return avatar1;
    case 2: return avatar2;
    case 3: return avatar3;
  }
}

export function printDoctorsList(page, doctorsList){
  page.appendChild(createContent("h2", "Top Doctors"));
  var div = document.createElement("div");
  div.className= "container-top";
  page.appendChild(div);

  doctorsList.forEach(element => {
    var item = `<div class="doctor ${element.classCSS}" onclick="doctorPage(${element.id})"><img src="`+getAvatar(element.id)+`"><div><h2>Dr. ${element.firstname} ${element.lastname}</h2><p>${element.categories} - ${element.workplace} </p></div></div>`;
    div.insertAdjacentHTML("beforeend", item);
  });

}
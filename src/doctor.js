import { createContent } from './generic'

export function printDoctorsList(div, doctorsList){
    
    var doc = "Dr. Stella Kane";
    var hospital = "Heart Surgeon - Flower Hospitals";
    
    doctorsList.forEach(element => {
      var item = `<div class="doctor ${element.classCSS}" onclick="doctorPage(${element.id})"><img src=""><div><h2>Dr. ${element.firstname} ${element.lastname}</h2><p>${element.categories} - ${element.workplace} </p></div></div>`;
      div.insertAdjacentHTML("beforeend", item);
    });

}
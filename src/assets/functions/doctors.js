import '../css/doctor__page.scss';

import { createContent, newImage, printUpcomingSchedules, removeAllChildNodes } from './utils'

import { getDoctor } from 'Function/page'

import avatar0 from 'Image/avatar1.svg';
import avatar1 from 'Image/avatar2.svg';
import avatar2 from 'Image/avatar3.svg';
import iconTel from 'Image/tel.png';
import iconEmail from 'Image/email.png';
import iconCall from 'Image/call.png';

import * as DoctorService from "Service/DoctorService";

function printAvatarDoctor(div, id){
  const avatar = [avatar0, avatar1, avatar2];
  return div.appendChild(newImage(100, 100, avatar[id-1], "", "avatar"))
}

export async function printDoctorsList(divcontainer, doctors = []){

  if(doctors.length === 0)
  {
    doctors = await DoctorService.fetchAll();
  }

  doctors.forEach((doctor) => {
  
    const button = document.createElement("button");
  
    button.className = "doctor__list " + doctor.classCSS;
  
    button.onclick = function () {
      getDoctor(doctor.id);
    };
  
    printAvatarDoctor(button, doctor.id);
  
    let div = document.createElement("div");
    div.id = "doctor__list--details";
  
    div.appendChild(
      createContent("h2", "Dr. " + doctor.firstname + " " + doctor.lastname)
    );
  
    div.appendChild(
      createContent("p", doctor.categories + " - " + doctor.workplace)
    );
  
    button.appendChild(div);
    divcontainer.appendChild(button);
  });

}

export function resetDoctorList(){

  let title = document.getElementById("doctor__list--title");

  // delete previous reset button
  removeAllChildNodes(title);
  // rewrite title of doctors list
  title.appendChild(createContent("h2", "Top Doctors"));

  document.getElementById("search__input").value = '';
  // create reset button 
  let input = document.createElement("input");

  // -> setAttribute(nome => valore)
  input.setAttribute("type", "button");
  input.setAttribute("id", "doctor__list--reset");
  input.setAttribute("class", "btn")
  input.setAttribute("value", "reset");

  input.onclick = function(){
      // clean doctor list
      let page = document.getElementById("doctor__list--result");
      page.innerHTML = "";
      printDoctorsList(page);
      // remove reset button
      let button = document.getElementById("doctor__list--reset");
      title.removeChild(button)
  }
  title.appendChild(input);
}

export function printDoctor(id){

  let doctor = DoctorService.fetch(id); 

  const divcontent = document.createElement("div");
  divcontent.className = "doctor__page--content";

  const divdetails = document.createElement("div");
  divdetails.className = "doctor__page--details";

  printAvatarDoctor(divdetails, id);

  const divdata = document.createElement("div");

  divdata.appendChild(
    createContent("h2", "Dr. " + doctor.firstname + " " + doctor.lastname)
  );
  divdata.appendChild(
    createContent("p", doctor.categories + " - " + doctor.workplace)
  );

  const name = [iconTel, iconEmail, iconCall];

  name.forEach((elem) => divdata.appendChild(newImage(35, 35, elem)));

  divdetails.appendChild(divdata);
  divcontent.appendChild(divdetails);

  divcontent.appendChild(createContent("h2", "About Doctor"));
  divcontent.appendChild(createContent("p", doctor.about));

  divcontent.appendChild(printUpcomingSchedules());

  return divcontent;
}
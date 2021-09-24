import '../css/doctor__page.scss';

import { createContent, newImage } from '../functions/generic'
import { getDoctor } from '../functions/page'

import avatar0 from '../images/avatar1.svg';
import avatar1 from '../images/avatar2.svg';
import avatar2 from '../images/avatar3.svg';

import iconTel from '../images/tel.png';
import iconEmail from '../images/email.png';
import iconCall from '../images/call.png';

import bgDoctor from '../images/bgdoctor.png';

import consultation1 from '../images/cons1.png';
import consultation2 from '../images/cons2.png';

import doctorsJson from '../doctors.json';
import Doctor from '../../class/Doctor';
export function createDoctorsList() {
  const listDoctors = doctorsJson.doctorsList;
  return listDoctors.map( function(doctor) {
      return new Doctor(doctor.id, doctor.firstname, doctor.lastname, doctor.avatar, doctor.classCSS, doctor.categories, doctor.workplace, doctor.about)
  })
}


function printAvatarDoctor(div, id){
  const avatar = [avatar0, avatar1, avatar2];
  return div.appendChild(newImage(100, 100, avatar[id-1], "", "avatar"))
}

export function printDoctorsList(divcontainer, categoriesList, doctorsList){

  doctorsList.forEach(element => {

    const button = document.createElement("button");
    button.className = "doctor__list "+element.classCSS;
    button.onclick = function() { getDoctor(element.id, categoriesList, doctorsList); };

    printAvatarDoctor(button, element.id);

    let div = document.createElement("div");
    div.id= "doctor__list--details"; 

    div.appendChild(createContent("h2", "Dr. " + element.firstname+" "+element.lastname));
    div.appendChild(createContent("p", element.categories+" - "+element.workplace));

    button.appendChild(div);
    divcontainer.appendChild(button);
    
  });
}

function printUpcomingSchedules(){
  const div = document.createElement('div');
  div.className = "doctor__upcoming-schedules";

  div.appendChild(createContent("h2", "Upcoming Schedules"));

  div.appendChild(newImage(325, 87, consultation1));
  div.appendChild(newImage(325, 87, consultation2));

  return div;
}

export function printDoctor(doctorsList, id){
  let result = doctorsList
    .filter(doc => doc.id === id);

  const divcontent = document.createElement('div');
  divcontent.className= "doctor__page--content"; 

  const divdetails = document.createElement('div');
  divdetails.className= "doctor__page--details"; 

  printAvatarDoctor(divdetails, id);
  
  const divdata = document.createElement('div');
  divdata.appendChild(createContent("h2", "Dr. "+result[0].firstname+" "+result[0].lastname));
  divdata.appendChild(createContent("p", result[0].categories+" - "+result[0].workplace));

  const name = [iconTel, iconEmail, iconCall]
  name.forEach(elem =>
    divdata.appendChild(newImage(35, 35, elem))
  );

  divdetails.appendChild(divdata);
  divcontent.appendChild(divdetails);

  divcontent.appendChild(createContent("h2", "About Doctor"));
  divcontent.appendChild(createContent("p",result[0].about))

  divcontent.appendChild(printUpcomingSchedules());

  return divcontent;

}

export function createBanner(){
  const div = document.createElement('div');
  div.className= "doctor__page--image";
  div.style.cssText = `background-image: url(${bgDoctor})`;
  return div;
}


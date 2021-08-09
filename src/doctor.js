import './assets/css/doctor__page.scss';

import { createContent, newImage } from './generic'
import { getDoctor } from './page'

import avatar0 from '../src/assets/images/avatar1.svg';
import avatar1 from '../src/assets/images/avatar2.svg';
import avatar2 from '../src/assets/images/avatar3.svg';

import iconTel from '../src/assets/images/tel.png';
import iconEmail from '../src/assets/images/email.png';
import iconCall from '../src/assets/images/call.png';

import bgDoctor from '../src/assets/images/bgdoctor.png';

import consultation1 from '../src/assets/images/cons1.png';
import consultation2 from '../src/assets/images/cons2.png';

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

    var div = document.createElement("div");
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
  var result = doctorsList
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


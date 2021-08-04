import './assets/css/doctor__page.scss';

import { createContent } from './generic'
import { getDoctor } from './page'

import avatar1 from '../src/assets/images/avatar1.svg';
import avatar2 from '../src/assets/images/avatar2.svg';
import avatar3 from '../src/assets/images/avatar3.svg';

import iconTel from '../src/assets/images/tel.png';
import iconEmail from '../src/assets/images/email.png';
import iconCall from '../src/assets/images/call.png';

import bgDoctor from '../src/assets/images/bgdoctor.png';

import consultation1 from '../src/assets/images/cons1.png';
import consultation2 from '../src/assets/images/cons2.png';

// TODO: improve
function getAvatar(id){
  switch(id){
    case 1: return avatar1;
    case 2: return avatar2;
    case 3: return avatar3;
  }
}

export function printAvatarDoctor(id){
  var image = new Image(100, 100);
  image.src = getAvatar(id);
  image.class = "avatar"
  return image;
}

export function printIcon(name){
  var image = new Image(35, 35);
  switch(name){
    case "tel": image.src = iconTel; break;
    case "email": image.src = iconEmail; break;
    case "call": image.src = iconCall; break;
  }
  return image
}

export function printDoctorsList(divcontainer, categoriesList, doctorsList){

  doctorsList.forEach(element => {

    const button = document.createElement("button");
    button.className = "doctor__list "+element.classCSS;
    button.onclick = function() { getDoctor(element.id, categoriesList, doctorsList); };

    button.appendChild(printAvatarDoctor(element.id));

    var div = document.createElement("div");
    div.id= "doctor__list--details"; //button-content

    div.appendChild(createContent("h2", "Dr. " + element.firstname+" "+element.lastname));
    div.appendChild(createContent("p", element.categories+" - "+element.workplace));

    button.appendChild(div);
    divcontainer.appendChild(button);
    
  });

}

function printUpcomingSchedules(){
  const div = document.createElement('div');
  div.className = "doctor__upcoming-schedules";

  var image = new Image(325, 87);
  image.src = consultation1;
  div.appendChild(image);

  var image = new Image(325, 87);
  image.src = consultation2;
  div.appendChild(image);

  return div;
}

export function printDoctor(doctorsList, id){
  var result = doctorsList
    .filter(doc => doc.id === id);

  const divcontent = document.createElement('div');
  divcontent.className= "doctor__page--content"; //doctorpage-content

  const divdetails = document.createElement('div');
  divdetails.className= "doctor__page--details"; //doctorpage-details

  divdetails.appendChild(printAvatarDoctor(id));
  
  const divdata = document.createElement('div');
  divdata.appendChild(createContent("h2", "Dr. "+result[0].firstname+" "+result[0].lastname));
  divdata.appendChild(createContent("p", result[0].categories+" - "+result[0].workplace));

  divdata.appendChild(printIcon("tel"));
  divdata.appendChild(printIcon("email"));
  divdata.appendChild(printIcon("call"));
  
  divdetails.appendChild(divdata);
  divcontent.appendChild(divdetails);

  divcontent.appendChild(createContent("h2", "About Doctor"));
  divcontent.appendChild(createContent("p",result[0].about))

  divcontent.appendChild(printUpcomingSchedules());

  return divcontent;

}

export function createBanner(){
  const div = document.createElement('div');
  div.className= "doctor__page--image"; //doctorpage-image
 // div.id= "doctorpage-image" //doctorpage-image
  div.style.cssText = `background-image: url(${bgDoctor})`;
  return div;
}


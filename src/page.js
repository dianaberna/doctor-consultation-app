import './assets/css/intro__page.scss';

import { createContent, printSearchBar, back, reset, generateMenu, newImage } from './generic'
import { printDoctor, printDoctorsList, createBanner } from './doctor'
import { printCategoriesList } from './categories';
import iconOther from '../src/assets/images/other.svg';

import bgImage from '../src/assets/images/bghome.png';
import menu from '../src/assets/images/menu-bar.svg';
import profile from '../src/assets/images/profile.svg';

// print intro page of app
export function getIntro(categoriesList, doctorsList){
  reset();
  const page = document.createElement('div');
  document.getElementById("content").appendChild(page);
  page.id= "intro__page"
  page.style.cssText = `background-image: url(${bgImage}); background-position-y: 350px;`;
  page.appendChild(createContent("h1", "Choose The Doctor You Want"));
  page.appendChild(createContent("p", "Lorem ipsum dolor amet, consectetur adipiscing inet deli"));

  const button = document.createElement("button");
  button.className = "btn btn__home";
  button.onclick = function() { getMainpage(categoriesList, doctorsList); };
  button.appendChild(document.createTextNode("Get started"));
  page.appendChild(button);

  if( screen.width > 767){
    alert("It is advisable to view the site from mobile")
  }

  return page;
}

// print the main page
export function getMainpage(categoriesList, doctorsList) {
    reset();

    const page = document.createElement('div');
    document.getElementById("content").appendChild(page);
    page.id= "main__page";

    // print menu 
    var div = document.createElement("div");
    div.id = "main__page__menu__box";
    var ul = document.createElement("ul");
    ul.id = "main__page__menu__item";

    var menuIcon = new Image(25, 25);
    menuIcon.src = menu;
    menuIcon.id = "main__page__menu__bar";
    menuIcon.onclick = function(){
      generateMenu(ul, categoriesList, doctorsList);
    }
    div.appendChild(menuIcon);
    div.appendChild(ul);
    
    div.appendChild(newImage(50, 50, profile, "main__page__menu__profile"));

    page.appendChild(div);

    page.appendChild(createContent("h1", "Find Your Desired Doctor"));
  
    // print search bar and button
    printSearchBar(page, categoriesList, doctorsList);
  
    // categories section
    // print title 
    page.appendChild(createContent("h2", "Categories"));
    // print all categories
    printCategoriesList(page, categoriesList, doctorsList);
  
    // top doctors section 
    // print title 
    page.appendChild(createContent("h2", "Top Doctors", "doctor__list--title")); //title-doctor
    // create div for lists of doctor
    var divcontainer = document.createElement("div");
    divcontainer.id = "doctor__list--result"; //result-doctor
    // print all doctors
    printDoctorsList(divcontainer, categoriesList, doctorsList);
    page.appendChild(divcontainer);
}

// print the doctor details page
export function getDoctor(doctor, categoriesList, doctorsList){
  reset();

  const page = document.createElement('div');
  document.getElementById("content").appendChild(page);
  page.className= "doctor__page";

  // print button for go back to precedent page
  page.appendChild(back(categoriesList, doctorsList));

  var otherIcon = new Image(25, 25);
  otherIcon.src = iconOther;
  otherIcon.id = "doctor__page__menu--other";  
  page.appendChild(otherIcon);
  // insert the banner with image
  page.appendChild(createBanner());
  // print all doctor details
  page.appendChild(printDoctor(doctorsList, doctor));
}
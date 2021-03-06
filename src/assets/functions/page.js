import '../css/intro__page.scss';

import { createContent, back, reset, newImage, createBanner } from './utils'
import { generateMenu } from './menu'
import { printSearchBar } from './searchbar'
import { printDoctor, printDoctorsList } from './doctors'
import { printCategoriesList } from './categories';

import iconOther from 'Image/other.svg';
import bgImage from 'Image/bghome.png';
import menu from 'Image/menu-bar.svg';
import profile from 'Image/profile.svg';

// print intro page
export function getIntro(){

  reset();

  const page = document.createElement('div');
  document.getElementById("content").appendChild(page);

  page.id= "intro__page";
  page.style.cssText = `background-image: url(${bgImage}); background-position-y: 350px;`;
  page.appendChild(createContent("h1", "Choose The Doctor You Want"));
  page.appendChild(createContent("p", "Lorem ipsum dolor amet, consectetur adipiscing inet deli"));

  const button = document.createElement("button");
  button.className = "btn btn__home";
  button.onclick = function() { getMainpage(); }; 
  button.appendChild(document.createTextNode("Get started"));

  page.appendChild(button);

  if( screen.width > 767){
    //alert()
    console.log("It is advisable to view the site from mobile")
  }

  return page;
}

// print the main page
export async function getMainpage() {
    reset();

    const page = document.createElement('div');
    document.getElementById("content").appendChild(page);
    page.id= "main__page";

    // print menu 
    let div = document.createElement("div");
    div.id = "main__page__menu__box";

    let ul = document.createElement("ul");
    ul.id = "main__page__menu__item";

    let menuIcon = new Image(25, 25);
    menuIcon.src = menu;
    menuIcon.id = "main__page__menu__bar";
    menuIcon.onclick = function(){
      generateMenu(ul);
    }

    div.appendChild(menuIcon);
    div.appendChild(ul);
    
    div.appendChild(newImage(50, 50, profile, "main__page__menu__profile"));

    page.appendChild(div);

    page.appendChild(createContent("h1", "Find Your Desired Doctor"));
  
    // print search bar and button
    printSearchBar(page);
  
    // categories section
    // print title 
    page.appendChild(createContent("h2", "Categories"));
    // print all categories
    await printCategoriesList(page);
  
    // top doctors section 
    // print title 
    page.appendChild(createContent("h2", "Top Doctors", "doctor__list--title")); //title-doctor

    // create div for lists of doctor
    let divcontainer = document.createElement("div");
    divcontainer.id = "doctor__list--result"; //result-doctor

    // print all doctors
    await printDoctorsList(divcontainer);
    page.appendChild(divcontainer);
}

// print the doctor details page
export function getDoctor(doctor){
  reset();

  const page = document.createElement('div');
  document.getElementById("content").appendChild(page);
  page.className= "doctor__page";

  // print button for go back to precedent page
  page.appendChild(back());

  let otherIcon = new Image(25, 25);
  otherIcon.src = iconOther;
  otherIcon.id = "doctor__page__menu--other";  
  page.appendChild(otherIcon);
  // insert the banner with image
  page.appendChild(createBanner());
  // print all doctor details
  page.appendChild(printDoctor(doctor));
}
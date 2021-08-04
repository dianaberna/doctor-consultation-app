import './style.scss';

import { getIntro } from './page'

import categoriesJson from '../src/assets/categories.json';
import doctorsJson from '../src/assets/doctors.json';

// doctor

class Doctor {
  constructor(id, firstname, lastname, avatar, classCSS, categories, workplace, about) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.avatar = avatar;
      this.classCSS = classCSS;
      this.categories = categories;
      this.workplace = workplace;
      this.about = about;
  }
}

function createDoctorsList() {
  const listDoctors = doctorsJson.doctorsList;
  return listDoctors.map( function(doctor) {
      return new Doctor(doctor.id, doctor.firstname, doctor.lastname, doctor.avatar, doctor.classCSS, doctor.categories, doctor.workplace, doctor.about)
  })
}

const doctorsList = createDoctorsList();
Object.freeze(doctorsList);

// categories

class Category {
  constructor(id, name, image, classCSS) {
      this.id = id;
      this.name = name;
      this.image = "../src/assets/images/" + image;
      this.classCSS = classCSS;
  }
}

function createCategoriesList() {
  const listCategories = categoriesJson.categoriesList;
  return listCategories.map( function(category) {
      return new Category(category.id, category.name, category.image, category.classCSS)
  })
}

const categoriesList = createCategoriesList();
Object.freeze(categoriesList);

// todo: check if mobile and add alert

document.body.appendChild(getIntro(categoriesList, doctorsList));

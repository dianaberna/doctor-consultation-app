import './style.css';

import { getIntro } from './page'

import categories from '../assets/categories.json';
import doctorsJson from '../assets/doctors.json';

// doctor

class Doctor {
  constructor(id, firstname, lastname, avatar, classCSS, categories, workplace, about) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.avatar = "../assets/img/" + avatar;
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



// fare check se mobile e stampare un alert
document.body.appendChild(getIntro(doctorsList));

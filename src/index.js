import './style.scss';

// get the first page aka the intro page 
import { getIntro } from 'Function/page'

import { createDoctorsList } from 'Function/doctor'
const doctorsList = createDoctorsList();
// freeze the object doctorsList to no longer allow a modification
Object.freeze(doctorsList);

import { createCategoriesList } from 'Function/categories'
const categoriesList = createCategoriesList();
// freeze the object categoriesList to no longer allow a modification
Object.freeze(categoriesList);

// generate the intro page
document.body.appendChild(getIntro(categoriesList, doctorsList));
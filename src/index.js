import './style.scss';

// get the first page aka the intro page 
import { getIntro } from './assets/functions/page'

import { createDoctorsList } from '../src/assets/functions/doctor'
const doctorsList = createDoctorsList();
// freeze the object doctorsList to no longer allow a modification
Object.freeze(doctorsList);

import { createCategoriesList } from '../src/assets/functions/categories'
const categoriesList = createCategoriesList();
// freeze the object categoriesList to no longer allow a modification
Object.freeze(categoriesList);

// generate the intro page
document.body.appendChild(getIntro(categoriesList, doctorsList));

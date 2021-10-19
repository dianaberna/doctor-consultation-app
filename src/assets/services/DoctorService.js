import Doctor from "Class/Doctor";
import jsonDoctors from "API/doctors.json";

export async function fetchAll() {
  return jsonDoctors.map(function (doctor) {
    return new Doctor(
      doctor.id,
      doctor.firstname,
      doctor.lastname,
      doctor.avatar,
      doctor.classCSS,
      doctor.categories,
      doctor.workplace,
      doctor.about
    );
  });
}

export function fetch(id = null) {
  return jsonDoctors.find(doctor => doctor.id === id);
}

export async function searchByName(name = null){
  return (name == null ? null : jsonDoctors.filter((doc) => doc.firstname.toLowerCase() === name));
}

export function searchByCategoryName(categoryName = null){
  return (categoryName == null ? null : jsonDoctors.filter(doc => doc.categories === categoryName));
}
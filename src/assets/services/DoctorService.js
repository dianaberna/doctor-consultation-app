import Doctor from "Class/Doctor";
import jsonDoctors from "API/doctors.json";

export default {
  //CreateReadUpdateDelete --> Modello Category / Class
  fetchAll() {
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
  },
  fetch(id = null) {
    return jsonDoctors.filter(doctor => doctor.id === id);
  },
};

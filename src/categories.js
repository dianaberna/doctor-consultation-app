export function printCategoriesList(){
    var cat = "Dental Surgeon";
    var item =`<div class="item"><div class="icon dental"><img src="${iconDental}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
    cat = "Heart Surgeon";
    item =`<div class="item"><div class="icon heart"><img src="${iconHeart}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
    cat = "Eye Specialist";
    item =`<div class="item"><div class="icon eye"><img src="${iconEye}"></div><h3>${cat}</h3></div>`;
    div.insertAdjacentHTML("beforeend", item);
}
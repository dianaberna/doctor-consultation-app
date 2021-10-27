export default class Category {
    constructor(id, name, image, classCSS) {
        this.id = id;
        this.name = name;
        this.image = "../src/assets/images/" + image;
        this.classCSS = classCSS;
    }
}
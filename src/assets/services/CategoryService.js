import Category from "Class/Category";
import jsonCategories from "API/categories.json";

export default {
    //CreateReadUpdateDelete --> Modello Category / Class
    fetchAll() {
        return jsonCategories.map(function (category) {
            return new Category(
                category.id,
                category.name,
                category.image,
                category.classCSS
            );
        });
    },
    fetch(id = null) {
        return jsonCategories.filter(category => category.id === id);
    }
};

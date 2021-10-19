import Category from "Class/Category";
import jsonCategories from "API/categories.json";

export async function fetchAll() {
    return jsonCategories.map(function (category) {
        return new Category(
            category.id,
            category.name,
            category.image,
            category.classCSS
        );
    });
}
export function fetch(id = null) {
  return jsonCategories.find((category) => category.id === id);
}
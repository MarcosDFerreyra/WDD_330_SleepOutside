import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";
const category_name = document.querySelector('.categoryTitle');


const category = getParam("category")

const dataSource = new ProductData();


const listElement = document.querySelector(".product-list");


const productList = new ProductList(category, dataSource, listElement);

productList.init();

loadHeaderFooter();

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
category_name.textContent = `${capitalize(category)}`;


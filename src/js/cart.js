import ShoppingCart from "./shoppingCart.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const listElement = document.querySelector(".product-list");

const shoppingCart = new ShoppingCart(listElement);

shoppingCart.init();

loadHeaderFooter();
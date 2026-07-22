import ShoppingCart from "./shoppingCart.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const listElement = document.querySelector(".product-list");
const total_price = document.querySelector(".total_price")
const cart_total_price = document.querySelector(".cart_total_price")

const shoppingCart = new ShoppingCart(listElement);

shoppingCart.init();

if (shoppingCart.cartItems.length > 0) {
    cart_total_price.classList.remove("hide")
    let total = shoppingCart.calculateTotalPrice(shoppingCart.cartItems)
    total_price.innerHTML = `Total: ${total}`
}

loadHeaderFooter();

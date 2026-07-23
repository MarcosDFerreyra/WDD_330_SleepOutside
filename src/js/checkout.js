import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";
const zip = document.querySelector("#zip");
const checkout = new CheckoutProcess("so-cart", ".order_summary")

checkout.init();

zip.addEventListener("change", () => {
    checkout.calculateAndDisplayTotals();
});

loadHeaderFooter();
import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./checkoutProcess.mjs";
const zip = document.querySelector("#zip");
const form = document.forms["checkout"]

const checkout = new CheckoutProcess("so-cart", ".order_summary")

checkout.init();

zip.addEventListener("change", () => {
    checkout.calculateAndDisplayTotals();
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await checkout.checkout(form);
})

loadHeaderFooter();
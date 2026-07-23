import { getLocalStorage } from "./utils.mjs";

export default class CheckoutProcess {
    constructor(key, selector) {
        this.key = key;
        this.selector = selector;
        this.list = [];

        this.itemTotal = 0;
        this.shipping = 0;
        this.tax = 0;
        this.orderTotal = 0;
    }

    init() {
        this.list = getLocalStorage(this.key) || [];
        this.calculateTotalPrice();
    }

    calculateTotalPrice() {
        let total_price = 0;

        this.list.forEach(item => {
            total_price += item.FinalPrice;
        });

        this.itemTotal = total_price;

        const subtotal = document.querySelector(`${this.selector} #subtotal`);
        subtotal.innerText = `$${this.itemTotal.toFixed(2)}`;

        return total_price;
    }

    calculateTax() {
        let price_tax = 0;

        price_tax = this.itemTotal * 0.06;

        this.tax = price_tax;
        return price_tax;
    }

    calculateShipping() {
        const items = this.list.length;

        if (items === 0) {
            this.shipping = 0;
        } else {
            this.shipping = 10 + (items - 1) * 2;
        }

        return this.shipping;
    }

    calculateOrderTotal() {
        this.calculateTax();
        this.calculateShipping();

        this.orderTotal =
            this.itemTotal +
            this.tax +
            this.shipping;

        return this.orderTotal;
    }

    displayTotals(){
        const taxes = document.querySelector(`${this.selector} #tax`);
        const shipping_estimate = document.querySelector(`${this.selector} #shipping`);
        const total_order = document.querySelector(`${this.selector} #total`);

        taxes.innerText = `$${this.tax.toFixed(2)}`;
        shipping_estimate.innerText = `$${this.shipping.toFixed(2)}`;
        total_order.innerText = `$${this.orderTotal.toFixed(2)}`;
    }

    calculateAndDisplayTotals() {
        this.calculateOrderTotal();
        this.displayTotals();
    }
}
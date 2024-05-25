import {totalElements} from '../../data/cart.js';

export function renderOrderTotalItems() {
    const totalItems = totalElements();
    document.querySelector('.js-checkout-items').innerHTML = 
    `Checkout (<a class="return-to-home-link"
    href="amazon.html">${totalElements()} items</a>)`;
}
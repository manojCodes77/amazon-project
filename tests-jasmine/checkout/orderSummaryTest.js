import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";

describe('test suite: renderOrderSummary', () => {
    it('displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = '<div class="js-order-summary"></div>';

        const productId1="e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
        const productId2="8c9c52b5-5a19-4bcb-a5d1-158a74287c53";
        spyOn(localStorage,'getItem').and.callFake(()=>
        {
            return JSON.stringify([
                {
                    productId: productId1,
                    quantity: 2,
                    deliveryOptionId: '1',
                },
                {
                    productId: productId2,
                    quantity: 1,
                    deliveryOptionId:'2',
                }
                // these are the sample objects that are added to the cart array. using javascript
                ]);
        });
        loadFromStorage();
        renderOrderSummary();

        expect (document.querySelectorAll('.js-cart-item-container').length).toEqual(2);

        expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2');

        expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1');
    });

    it('removes a product', ()=>{
        document.querySelector('.js-test-container').innerHTML = `<div class="js-order-summary"></div>
        <div class="js-payment-summary"></div>`;

        const productId1="e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
        const productId2="8c9c52b5-5a19-4bcb-a5d1-158a74287c53";
        spyOn(localStorage,'getItem').and.callFake(()=>
        {
            return JSON.stringify([
                {
                    productId: productId1,
                    quantity: 2,
                    deliveryOptionId: '1',
                },
                {
                    productId: productId2,
                    quantity: 1,
                    deliveryOptionId:'2',
                }
                // these are the sample objects that are added to the cart array. using javascript
                ]);
        });
        loadFromStorage();

        renderOrderSummary();

        // document.querySelector(`.js-delete-link`).click();


        expect (document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
    })
});
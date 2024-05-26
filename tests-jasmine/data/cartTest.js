import {addToCart} from '../../data/cart.js';

describe('test suite: addToCart', () => {
    it('adds an item to the cart',()=>{
        let cart = [];
        addToCart(cart, {id:1, name: 'Laptop', price: 1000});
        expect(cart.length).toEqual(1);
    });

    it('adds the correct item to the cart',()=>{
        let cart = [];
        addToCart(cart, {id:1, name: 'Laptop', price: 1000});
        expect(cart[0].name).toEqual('Laptop');
    });

    it('adds the correct price to the cart',()=>{
        let cart = [];
        addToCart(cart, {id:1, name: 'Laptop', price: 1000});
        expect(cart[0].price).toEqual(1000);
    });

    it('adds the correct quantity to the cart',()=>{
        let cart = [];
        addToCart(cart, {id:1, name: 'Laptop', price: 1000});
        expect(cart[0].quantity).toEqual(1);
    });

    it('increments the quantity if the item is already in the cart',()=>{
        let cart = [{id:1, name: 'Laptop', price: 1000, quantity: 1}];
        addToCart(cart, {id:1, name: 'Laptop', price: 1000});
        expect(cart[0].quantity).toEqual(2);
    });
});
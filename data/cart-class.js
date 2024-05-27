// we generally use pascalcase for things that generate objects
class Cart{
    cartItems= undefined;
    #localStorageKey=undefined;//we use # to make it private

    constructor(localStorageKey){
        this.#localStorageKey=localStorageKey;
        // businessCart.localStorageKey='business-cart-oop';
        this.#loadFromStorage();
        // businessCart.loadFromStorage();
    }

    #loadFromStorage() {//this is a shortcut of loadFromStorage: function() {}
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (!this.cartItems) {
            this.cartItems = [
            {
              productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              quantity: 2,
              deliveryOptionId: '1',
            },
            {
              productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
              quantity: 1,
              deliveryOptionId: '2',
            }
            // these are the sample objects that are added to the cart array. using javascript
          ];
        }
    };

    saveToStorage() {
        localStorage.setItem(this.#loadFromStorage, JSON.stringify(this.cartItems));
    };

    addToCart(productId) {

        let matchingItem;
        this.cartItems.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
            return;
        };
        });
    
        if (matchingItem) {
        matchingItem.quantity++;
        }
        else {
            this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: "1",
        });
        };
    
        this.saveToStorage();
    };
    removeFromCart(productId) {
        let newCart = [];
    
        this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    
        });
        this.cartItems = newCart;
    
        this.saveToStorage();
    };
    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
        this.cartItem.forEach((item) => {
            if (productId === item.productId) {
            matchingItem = item;
            return;
            };
        });
        
        matchingItem.deliveryOptionId = deliveryOptionId;
        
        this.saveToStorage();
    };
    totalElements()
    {
        let total = 0;
        this.cartItem.forEach(cartItem => {
            total += cartItem.quantity;
        });
        return total;
    };
}

const cart= new Cart();
const businessCart= new Cart();

// cart.#localStorageKey='cart-oop';
console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);


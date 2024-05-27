// this file contains all the code that is required to add the products to the cart page and make the add to cart button work.

// here i want that the cart variable should be available to all the files that import this file.
export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        quantity: 1,
        deliveryOptionId: "2",
      }
      // these are the sample objects that are added to the cart array. using javascript
    ];
  }
};

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {

  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
      return;
    };
  });

  if (matchingItem) {
    matchingItem.quantity++;
  }
  else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1",
    });
  };

  saveToStorage();
}

export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }

  });
  cart = newCart;

  saveToStorage();
};

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
      return;
    };
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

export function totalElements()
{
    let total = 0;
    cart.forEach(cartItem => {
        total += cartItem.quantity;
    });
    return total;
}
import { renderOrderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js"; 

import {renderOrderTotalItems} from "./checkout/items.js";

import'../data/cart-class.js';

renderOrderTotalItems();

renderOrderSummary();

renderPaymentSummary();
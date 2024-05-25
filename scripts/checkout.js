import { renderOrderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js"; 

import {renderOrderTotalItems} from "./checkout/items.js";

renderOrderTotalItems();

renderOrderSummary();

renderPaymentSummary();
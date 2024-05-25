import { formatCurrency } from "../scripts/utils/money.js";

if(formatCurrency(2095)==="20.95")
{
    console.log("Test passed");
}
else{
    console.error("Test failed");
}

if(formatCurrency(2000.5) === "20.01")
{
    console.log("Test passed");
}
else{
    console.error("Test failed");
}
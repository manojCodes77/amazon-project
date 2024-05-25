import { formatCurrency } from "../scripts/utils/money.js";

// here we are going to create a test suite
describe('test suite: formatCurrency', () => {// descrige is provided by jasmine
    it('converts cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual("20.95");
    });

    it('works with 0',()=>{
        expect(formatCurrency(0)).toEqual("0.00");
    })

    it('rounds up to the nearest cent',()=>{
        expect(formatCurrency(2000.5)).toEqual("20.01");
    });
});

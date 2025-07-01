import {formatCurrency} from '../../scripts/utils/money.js';
describe('test suit :formatCurrency',()=>{//name of the test case
    it('convert no. into rupees',()=>{
        expect(formatCurrency(2095)).toEqual('₹ 2095');
    });

    it('convert big no. into rupees',()=>{
        expect(formatCurrency(206666695)).toEqual('₹ 206666695');
    });

});
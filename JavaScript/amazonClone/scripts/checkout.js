import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts,loadProductsFetch } from '../data/products.js';
// import '../data/cart-class.js';
// import '../data/bakend-practice.js';

async function loadPage(){
    try{
        // throw 'error1';
        await loadProductsFetch();
    }
    catch{
        console.log('Unexpected Error.Please try again later..');
    } 

    renderOrderSummary();
    renderPaymentSummary();
}

loadPage()
// loadProductsFetch()
// .then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })
// loadProducts(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });

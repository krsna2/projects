import {cart } from '../../data/cart.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { getProduct } from '../../data/products.js';
import { addOrders } from '../../data/orders.js';


export function renderPaymentSummary(){
    let rawProductPrice=0;
    let shippingPrice=0;

    cart.forEach((cartItem)=>{
        const product=getProduct(cartItem.productId);
        rawProductPrice+=product.price*cartItem.quantity;

        const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);

        shippingPrice+=deliveryOption.price;
    });
    const totalBeforeTax=rawProductPrice+shippingPrice;
    const tax=totalBeforeTax*0.1;
    const totalPrice=totalBeforeTax+tax;
    

    const paymentSummaryHTML=`
    <div class="payment-summary-title">
        Order Summary
    </div>

    <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">₹ ${rawProductPrice}</div>
    </div>

    <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">₹ ${shippingPrice}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">₹ ${totalBeforeTax}</div>
    </div>

    <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">₹ ${tax}</div>
    </div>

    <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">₹ ${totalPrice}</div>
    </div>

    <button class="place-order-button button-primary js-place-order-button">
        Place your order
    </button>
    `

    document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;

    document.querySelector('.js-place-order-button').addEventListener('click',async()=>{
       try{
         const response=await fetch('https://supersimplebackend.dev/orders',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                cart:cart
            })
            });
            const order =await response.json();
            // console.log(order);
            addOrders(order);
       }
       catch(error){
            console.log('unexpected error...try again later...')
       }

       window.location.herf='orders.html';
    });
}
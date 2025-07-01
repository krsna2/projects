export let cart;  

loadFromStorage();

export function loadFromStorage(){
    cart= JSON.parse(localStorage.getItem('cart'))||[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    deliveryOptionId:'1'

    },
    {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
    deliveryOptionId:'2',
    }];
}


function saveToStroage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId){
  let matchingItem;

        cart.forEach((cartItem)=>{
            if(productId===cartItem.productId){
                matchingItem=cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity+=1;
        }
        else{
            cart.push({
            productId:productId,
            quantity:1,
            deliveryOptionId:'1'
            });//pushing data in cart array.

        }
        saveToStroage();
}

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart=newCart;
    saveToStroage();
    // cart.length = 0; // empty the original array
    // newCart.forEach(item => cart.push(item)); 
}

export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
            if(productId===cartItem.productId){
                matchingItem=cartItem;
            }
        });
    matchingItem.deliveryOptionId=deliveryOptionId;
    saveToStroage();
}
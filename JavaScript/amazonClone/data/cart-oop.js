function Cart(localStorageKey){
    const cart={
        cartItems:undefined,

        loadFromStorage(){//loadFromStorage:function(){
            this.cartItems= JSON.parse(localStorage.getItem(localStorageKey))||[{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:2,
            deliveryOptionId:'1'

            },
            {
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1,
            deliveryOptionId:'2',
            }];
            },
        saveToStroage(){ //saveToStroage:function(){
            localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
        },

        addToCart(productId){
            let matchingItem;

            this.cartItems.forEach((cartItem)=>{
                if(productId===cartItem.productId){
                    matchingItem=cartItem;
                }
            });

            if(matchingItem){
                matchingItem.quantity+=1;
            }
            else{
                this.cartItems.push({
                productId:productId,
                quantity:1,
                deliveryOptionId:'1'
                });//pushing data in cart array.

            }
            this.saveToStroage();
        },
        removeFromCart(productId) {
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                }
            });
            this.cartItems=newCart;
            this.saveToStroage();
            // cart.length = 0; // empty the original array
            // newCart.forEach(item => cart.push(item)); 
        },
        updateDeliveryOption(productId,deliveryOptionId){
            let matchingItem;
            this.cartItems.forEach((cartItem)=>{
                    if(productId===cartItem.productId){
                        matchingItem=cartItem;
                    }
                });
            matchingItem.deliveryOptionId=deliveryOptionId;
            this.saveToStroage();
        }

        };//export let cart=undefine;
    return cart;
}
const cart=Cart('cart-oop');
const bussinessCart=Cart('cart-bussiness');
cart.loadFromStorage();


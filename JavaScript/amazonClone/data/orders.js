export const orders=JSON.parse(localStorage.getItem('orders'))||[];

export function addOrders(order){
    orders.unshift(order);
    saveToStroage();
}
function saveToStroage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}
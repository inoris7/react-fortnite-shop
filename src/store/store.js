import { makeAutoObservable } from "mobx";

class Store {
    goods = [];
    loading = true;
    orders = [];
    openedBasket = false;    
    alertName = '';

    constructor() {
        makeAutoObservable(this); 
    };

    resetAlert() {
        this.alertName = '';
    };

    removeFromBasket(itemId) {
        this.orders = this.orders.filter((ordersItem) => ordersItem.id !== itemId);
    };

    addToBasket(item) {
        const itemIndex = this.orders.findIndex(ordersItem => ordersItem.id === item.id);

            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...item,
                    quantity: 1
                }; 
                newOrder = [...this.orders, newItem]
            } else {
                newOrder = this.orders.map((ordersItem, index) => {
                    if(index === itemIndex) {
                        return {
                            ...ordersItem,
                            quantity: ordersItem.quantity + 1
                        }                    
                    } else {
                        return ordersItem;
                    }
                });                                  
            };   

                this.alertName = item.name;                
                this.orders = [...newOrder];                               
    };

    handleBasketOpen() {
        this.openedBasket = !this.openedBasket;        
    };

    increaseQuantity(itemId) {
        this.orders = this.orders.map((el) => {
            if(el.id === itemId) {
               const newQuantity = el.quantity + 1;
               return {
                ...el,
                quantity: newQuantity
               }
            } else {
                return el;
            }
        }) 
    };

    decreaseQuantity(itemId) {
        this.orders = this.orders.map((el) => {
            if(el.id === itemId) {
               const newQuantity = el.quantity - 1;
               return {
                ...el,
                quantity: newQuantity >= 0 ? newQuantity : 0
               }
            } else {
                return el;
            }
        }) 
    };

    setGoods(data) {
       this.goods = [...data] || []; 
       this.loading = false;
    };

    get sumOfOrders() {
        return this.orders.reduce((sum, el) => sum + el.price * el.quantity, 0)
    } 
}

export default new Store();
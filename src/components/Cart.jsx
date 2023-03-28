import { useContext } from "react";
import { ShopContext } from "../logic/context";


function Cart() {
    const {orders = [], handleBasketOpen = Function.prototype} = useContext(ShopContext);   

   return (
    <div className="cart teal accent-3" onClick={handleBasketOpen}>         
        <i className="material-icons cart-icon">shopping_cart</i>
        <span className="cart-counter">{orders.length ? orders.length : 0}</span>                
    </div>
   )
}

export{Cart};
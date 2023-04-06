import { observer } from "mobx-react-lite";
import store from "../store/store";

const Cart = observer(() => {
   return (
    <div className="cart teal accent-3" onClick={() => store.handleBasketOpen()}>         
        <i className="material-icons cart-icon">shopping_cart</i>
        <span className="cart-counter">{store.orders.length ? store.orders.length : 0}</span>                
    </div>
   )
});

export{Cart};
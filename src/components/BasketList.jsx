import { observer } from "mobx-react-lite";
import store from "../store/store";
import { BasketItem } from "./BasketItem";

const BasketList = observer(() => {
    
    return (                  
        <ul className="collection basket-container">
            <li className="collection-item active">
                Cart 
                <span className="secondary-content">
                    <i className="material-icons basket-close" onClick={() => store.handleBasketOpen()}>close</i>
                </span>
            </li>
            {store.orders.length ? store.orders.map((el) => {                 
                return <BasketItem 
                            key={el.id} 
                            {...el}                                                         
                        />                        
                }) : <li className="collection-item">The cart is empty</li>
            }
            <li className="collection-item active">
                Total amount: {store.sumOfOrders} RUB
                <button className="secondary-content btn check-out__button teal darken-2">Check out</button>
                </li>   
        </ul>       
    )    
});

export {BasketList};
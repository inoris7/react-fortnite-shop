import { BasketItem } from "./BasketItem";
import { useContext } from "react";
import { ShopContext } from "../logic/context";

function BasketList() {    
    const {
        handleBasketOpen = Function.prototype, 
        orders = []
    } = useContext(ShopContext);    
        
    const sumOfOrders = orders.reduce((sum, el) => {        
        return sum + el.price * el.quantity;
    }, 0);    

    return (                  
        <ul className="collection basket-container">
            <li className="collection-item active">
                Cart 
                <span className="secondary-content">
                    <i className="material-icons basket-close" onClick={handleBasketOpen}>close</i>
                </span>
            </li>
            {orders.length ? orders.map((el) => {
                return <BasketItem 
                            key={el.id} 
                            {...el}                                                         
                        />
                }) : <li className="collection-item">The cart is empty</li>
            }
            <li className="collection-item active">
                Total amount: {sumOfOrders} RUB
                <button className="secondary-content btn check-out__button teal darken-2">Check out</button>
                </li>   
        </ul>       
    )
    
}

export {BasketList};
import { useContext } from "react";
import { ShopContext } from "../logic/context";

function BasketItem(props) {
    const { id,
            name, 
            price, 
            quantity,                      
        } = props;
    
    const {removeFromBasket, increaseQuantity, decreaseQuantity} = useContext(ShopContext);        

    return (
        <li className="collection-item basket-item">
            <span className="collection-item__name">{name}</span>
            <div className="collection-item__wrapper">
                <i
                    className="material-icons basket-btn"
                    onClick={() => decreaseQuantity(id)}
                >
                    chevron_left
                </i> 
                <span className="collection-item__quantity"> {quantity} pcs</span> 
                <i 
                    className="material-icons basket-btn" 
                    onClick={() => increaseQuantity(id)}
                >
                    chevron_right
                </i>
                <span className="collection-item__price">= {price * quantity} RUB</span>
            </div>
            <span className="secondary-content">
                <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>close</i>
            </span>
        </li>
    )
}

export {BasketItem};
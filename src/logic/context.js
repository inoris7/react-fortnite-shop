import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    orders: [],
    openedBasket: false,
    sumOfOrders: 0,
    alertName: ''
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);    

    value.resetAlert = () => {
        dispatch({type: 'RESET_ALERT'})
    };

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}});
    };

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    };

    value.handleBasketOpen = () => {
        dispatch({type: 'HANDLE_BASKET_OPEN'});
    };   

    value.increaseQuantity = (itemId) => {
        dispatch({type: 'INCREASE_QUANTITY', payload: {id: itemId}});
    }
    
    value.decreaseQuantity = (itemId) => {
        dispatch({type: 'DECREASE_QUANTITY', payload: {id: itemId}});
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data});
    }
    
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}
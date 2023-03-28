export function reducer(state, {type, payload}) {
    switch (type) {
        case 'RESET_ALERT':
            return {
                ...state,
                alertName: ''
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                orders: state.orders.filter(el => el.id !== payload.id)
            };
        case 'ADD_TO_BASKET': {
            const itemIndex = state.orders.findIndex((ordersItem) => ordersItem.id === payload.id);

            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }; 
                newOrder = [...state.orders, newItem]
            } else {
                newOrder = state.orders.map((ordersItem, index) => {
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

            return {
                ...state,
                orders: newOrder,
                alertName: payload.name
            };
            };
        case 'HANDLE_BASKET_OPEN':
            return {
                ...state,
                openedBasket: !state.openedBasket
            };
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                orders: state.orders.map((el) => {
                    if(el.id === payload.id) {
                       const newQuantity = el.quantity + 1;
                       return {
                        ...el,
                        quantity: newQuantity
                       }
                    } else {
                        return el;
                    }
                }), 
            }                           
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                orders: state.orders.map((el) => {
                    if(el.id === payload.id) {
                       const newQuantity = el.quantity - 1;
                       return {
                        ...el,
                        quantity: newQuantity >= 0 ? newQuantity : 0
                       }
                    } else {
                        return el;
                    }
                }), 
            }
        case 'SET_GOODS': 
            return {
                ...state,
                goods: payload || [],
                loading: false   
            }                           
        default:
            return state;
    } 
}
import { API_URL, API_KEY } from "../config";
import React, { useEffect } from 'react';
import { Preloader } from "../components/Preloader";
import { GoodsList } from "../components/GoodsList";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";

import { observer } from "mobx-react-lite";
import store from "../store/store";

const Shop = observer (() => {    
    
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            },
        })
        .then(response => response.json())
        .then(data => {
           store.setGoods(data.featured);                     
        });
        //eslint-disable-next-line        
    }, []) 
    
    return (        
        <main className='container content'>
            {store.loading ? <Preloader /> : <GoodsList />}
            <Cart orders={store.orders} />
            {store.openedBasket && <BasketList />}
            {store.alertName && <Alert />}
        </main>
    )       
});

export {Shop};
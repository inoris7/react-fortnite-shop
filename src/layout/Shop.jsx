import { API_URL, API_KEY } from "../config";
import React, { useEffect, useContext } from 'react';
import { Preloader } from "../components/Preloader";
import { GoodsList } from "../components/GoodsList";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";
import { ShopContext } from "../logic/context";

function Shop() {
    const {         
        loading,
        orders,
        openedBasket,        
        alertName,
        setGoods,        
    } = useContext(ShopContext);
    
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            },
        })
        .then(response => response.json())
        .then(data => {
           setGoods(data.featured);                     
        });
        //eslint-disable-next-line        
    }, []) 
    
    return (        
        <main className='container content'>
            {loading ? <Preloader /> : <GoodsList />}
            <Cart orders={orders} />
            {openedBasket && <BasketList />}
            {alertName && <Alert />}
        </main>
    )       
}

export {Shop};
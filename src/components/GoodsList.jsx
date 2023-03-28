import { GoodsItem } from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../logic/context";

function GoodsList() {
    const {goods = []} = useContext(ShopContext);

    if(!goods.length) {
        return <h3>Nothing here</h3>
    }
    
    return (
        <div className="goods-list">
            {goods.map(item => {
                return <GoodsItem 
                        key={item.id} 
                        {...item}                         
                        />;
            })}            
        </div>
        
    )
}

export {GoodsList};
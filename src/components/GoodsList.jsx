import { GoodsItem } from "./GoodsItem";
import { observer } from "mobx-react-lite";
import store from "../store/store";

const GoodsList = observer(() => {
    if(!store.goods.length) {
        return <h3>Nothing here</h3>
    }
    
    return (
        <div className="goods-list">
            {store.goods.map(item => {
                return <GoodsItem 
                        key={item.id} 
                        {...item}                         
                        />;
            })}            
        </div>        
    )
});

export {GoodsList};
import { ShopContext } from "../logic/context";
import { useContext } from "react";

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,                
    } = props;

    const {addToBasket} = useContext(ShopContext);

    return (
        <div className="row">
            <div className="col goods-item">
            <div className="card">
                <div className="card-image" id={id}>
                    <img src={full_background} alt={name} height='229px' />                                    
                </div>
                <div className="card-content">
                    <span className="card-title">{name}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <p className="left" style={{fontSize: '1.8rem'}}>{price} RUB</p>
                    <button 
                        className='btn'
                        onClick={() => addToBasket({id, name, price})}
                    >
                        Buy
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
};

export {GoodsItem};

           
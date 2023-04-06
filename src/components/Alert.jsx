import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import store from "../store/store";

const Alert = observer(() => {  

    useEffect(() => {
        const timerId = setTimeout(() => store.resetAlert(), 3000);
        
        return () => clearTimeout(timerId);
        // eslint-disable-next-line
    }, [store.alertName]);

    return (
        <div id="toast-container">
            <div className="toast">{store.alertName} added to cart</div>
        </div>
    )
})

export {Alert};
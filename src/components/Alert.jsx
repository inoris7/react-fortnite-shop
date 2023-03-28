import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../logic/context";

function Alert() {
    const {alertName = '', resetAlert = Function.prototype} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(resetAlert, 3000);

        return () => clearTimeout(timerId);
        // eslint-disable-next-line
    }, [alertName]);

    return (
        <div id="toast-container">
            <div className="toast">{alertName} added to cart</div>
        </div>
    )
}

export {Alert};
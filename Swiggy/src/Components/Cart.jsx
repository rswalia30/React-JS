import { useDispatch, useSelector } from "react-redux";
import ResMenuCard from "./ResMenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    // Subscribe to store
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCartBtn = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <div className="text-center bg-slate-200 mb-5">
                <h1 className="text-4xl font-bold m-2 p-4">This is Cart</h1>

                <button className="m-4 p-4 rounded-xl bg-red-800 text-white"
                    onClick={handleClearCartBtn}
                >Clear Cart</button>
            </div>
            {
                (cartItems.length === 0) && <p className="text-4xl bg-red-600 text-white text-center p-4">Cart is Empty</p>
            }
            <div className="w-6/12 mx-auto">
                {
                    cartItems.map(
                        (obj, i) => <ResMenuCard obj={obj} key={i} />
                    )
                }
            </div>
        </>
    )
}

export default Cart;
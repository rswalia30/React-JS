import { useDispatch } from "react-redux";
import { RES_MENU_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ResMenuCard = (props) => {
    // console.log(props);
    const { imageId, name, description, price, defaultPrice, finalPrice } = props.obj;

    const dispatch = useDispatch();
    const handleAddBtn = () => {
        // Dispatch an action
        dispatch(addItem(props.obj))
    }

    return (
        <>
            <div className="flex border-b-2 border-gray-400 mb-4">
                <div className="w-9/12">
                    <h5 className="font-sans text-lg">{name}</h5>
                    <p className=""> &#8377; {price / 100 || defaultPrice / 100 || finalPrice / 100}</p>
                    <p className="font-light mt-3">{description}</p>
                    <button className="bg-white text-green-600 p-2 my-3 rounded-lg font-semibold text-xl shadow-2xl"
                        onClick={handleAddBtn}
                    >Add +
                    </button>
                </div>

                <div className="w-3/12">
                    <img src={RES_MENU_IMG + imageId}
                        alt="card-img"
                        className="rounded-3xl w-[500px] p-3 h-auto object-contain shadow-sm"
                    />
                </div>
            </div>
        </>
    )
}

export default ResMenuCard;
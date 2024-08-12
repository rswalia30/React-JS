import { RES_MENU_IMG } from "../utils/constants";

const ResMenuCard = (props) => {
    // console.log(props);
    const { imageId, name, price, defaultPrice, finalPrice } = props?.obj?.card?.info || "";

    return (
        <div className="">
            <div className="m-3 p-3 w-[250px] bg-red-100 hover:bg-red-200">
                <img src={RES_MENU_IMG + imageId} alt="card-img" className="w-44 h-44 rounded-lg" />
                <h5 className="font-serif">{name}</h5>
                <p className="font-serif"> &#8377; {price / 100 || defaultPrice / 100 || finalPrice / 100}</p>
            </div>
        </div>
    )
}

export default ResMenuCard;
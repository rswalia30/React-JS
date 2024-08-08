/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { RES_MENU_IMG } from "../constants/constants";

const ResMenuCard = (props) => {
    // console.log(props);
    // console.log(props?.obj?.card?.info?.name);

    const { imageId, name, price } = props?.obj?.card?.info;
    // const { imageId, name, defaultPrice: price } = props?.obj?.card?.info;
    // const { imageId, name, finalPrice: price } = props?.obj?.card?.info;

    return (
        <div className="col-md-2">
            <div className="card mt-3 bg-light">
                <img src={RES_MENU_IMG + imageId} alt="" className="img-thumbnail" style={{ aspectRatio: "4/3" }} />
                <h5>{name}</h5>
                <p> &#8377; {price / 100}</p>
            </div>
        </div>
    )
}

export default ResMenuCard;
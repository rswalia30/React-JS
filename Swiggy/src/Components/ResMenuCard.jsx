import { RES_MENU_IMG } from "../utils/constants";

const ResMenuCard = (props) => {
    // console.log(props);
    const { imageId, name, price, defaultPrice, finalPrice } = props?.obj?.card?.info;

    return (
        <div className="col-md-2">
            <div className="card mt-3 bg-light">
                <img src={RES_MENU_IMG + imageId} alt="" className="img-thumbnail" style={{ aspectRatio: "4/3" }} />
                <h5>{name}</h5>
                <p> &#8377; {price / 100 || defaultPrice / 100 || finalPrice / 100}</p>
            </div>
        </div>
    )
}

export default ResMenuCard;
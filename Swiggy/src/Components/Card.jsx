import { useContext } from "react";
import { SWIGGY_CLOUDINARY_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Card = (props) => {
    // console.log(props);
    const { id, name, cloudinaryImageId, areaName, avgRating, cuisines, costForTwo, sla, promoted } = props?.res?.info || "Rohit";

    const { user } = useContext(UserContext);

    return (
        // to={`/res/${id}`}
        <div className="m-4 p-4 w-[280px] bg-red-100 hover:bg-red-200">
            <Link to={"/res/" + id} className="d-flex justify-content-center w-100 mb-2">
                <img
                    src={SWIGGY_CLOUDINARY_IMG + cloudinaryImageId}
                    className="rounded-xl mb-3 object-center w-60 h-60"
                    alt="res-img"
                />
            </Link>

            <div className="card-body">
                <h5 className="font-bold font-serif">{name}</h5>
                <h6 className="font-semibold">{avgRating} stars • {sla?.slaString}</h6>
                <p className="font-light">{cuisines.join(", ")}</p>
                <p>{areaName} • <b>{costForTwo}</b></p>
                <p>{promoted}Hi</p>
                <p className="font-serif">{user.name} - {user.email}</p>
            </div>
        </div>
    )
}

export default Card;
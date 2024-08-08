/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { SWIGGY_CLOUDINARY_IMG } from "../constants/constants";
import { Link } from "react-router-dom";

const Card = (props) => {
    // console.log(props);
    // console.log(props?.res?.info?.name + "  " + props?.res?.info?.id);
    const { id, name, cloudinaryImageId, areaName, avgRating, cuisines, costForTwo, sla } = props?.res?.info;

    return (
        // to={`/res/${id}`}
        <div className="card bg-light col-md-3 mt-3 d-flex flex-column">
            <Link to={"/res/" + id} className="d-flex justify-content-center w-100 mb-2">
                <img
                    src={SWIGGY_CLOUDINARY_IMG + cloudinaryImageId}
                    className="img-fluid"
                    alt="res-img"
                    style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                />
            </Link>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6>{avgRating} stars • {sla?.slaString}</h6>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName} • <b>{costForTwo}</b></p>
            </div>
        </div>
    )
}

export default Card;
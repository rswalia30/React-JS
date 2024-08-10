import { SWIGGY_CLOUDINARY_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Card = (props) => {
    // console.log(props);
    // console.log(props?.res?.info?.name + "  " + props?.res?.info?.id);
    const { id, name, cloudinaryImageId, areaName, avgRating, cuisines, costForTwo, sla } = props?.res?.info;

    return (
        // to={`/res/${id}`}
        <div className="m-4 p-4 w-[200px] bg-indigo-50">
            <Link to={"/res/" + id} className="d-flex justify-content-center w-100 mb-2">
                <img
                    src={SWIGGY_CLOUDINARY_IMG + cloudinaryImageId}
                    className="rounded-lg mb-3"
                    alt="res-img"
                    style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }}
                />
            </Link>

            <div className="card-body">
                <h5 className="font-bold font-serif">{name}</h5>
                <h6 className="font-semibold">{avgRating} stars • {sla?.slaString}</h6>
                <p className="font-light">{cuisines.join(", ")}</p>
                <p>{areaName} • <b>{costForTwo}</b></p>
            </div>
        </div>
    )
}

export default Card;
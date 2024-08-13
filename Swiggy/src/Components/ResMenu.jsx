import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {
    const { resid } = useParams();

    // Fetching data from API
    const resInfo = useResMenu(resid);
    // console.log(resInfo);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || "";
    // const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];
    // const { title } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || "";

    const itemCategory = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (obj) => obj?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(itemCategory);

    return (
        <>
            <div className="mt-3 text-center">
                <h1 className="text-3xl font-bold font-serif">{name} Menu</h1>
                <h3 className="font-thin">Res ID = {resid}</h3>
                <h5 className="font-semibold">{costForTwoMessage}</h5>
            </div>
            <div>
                {
                    itemCategory.map(
                        (obj, index) => {
                            return <ResCategory obj={obj} key={index} />
                        }
                    )
                }
            </div>
        </>
    )
}

export default ResMenu;
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import ResMenuCard from "./ResMenuCard";

const ResMenu = () => {
    const { resid } = useParams();

    // Fetching data from API
    const resInfo = useResMenu(resid);
    // console.log(resInfo);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);

    return (
        <div className="container mt-3">
            <h1 className="text-center">{name} Menu</h1>
            <h3 className="text-center">Res ID = {resid}</h3>
            <h5 className="text-center">{costForTwoMessage}</h5>

            <div className="row">
                <h3 className="bg-light">Recommended</h3>

                {/* <ResMenuCard obj={itemCards[0]} />
                <ResMenuCard obj={itemCards[1]} />
                <ResMenuCard obj={itemCards[2]} />
                <ResMenuCard obj={itemCards[3]} /> */}

                {
                    itemCards.map(
                        (obj) => {
                            return <ResMenuCard obj={obj} key={obj.card.info.id} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ResMenu;
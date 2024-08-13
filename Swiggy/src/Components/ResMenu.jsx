import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import ResMenuCard from "./ResMenuCard";

const ResMenu = () => {
    const { resid } = useParams();

    // Fetching data from API
    const resInfo = useResMenu(resid);
    console.log(resInfo);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || "";
    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];
    const { title } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || "";

    return (
        <div className="mt-3">
            <h1 className="text-center text-3xl font-bold font-serif">{name} Menu</h1>
            <h3 className="text-center font-thin">Res ID = {resid}</h3>
            <h5 className="text-center font-semibold">{costForTwoMessage}</h5>

            <h3 className="bg-slate-100 p-2 font-semibold">{title}</h3>

            <div className="flex flex-wrap justify-center">
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
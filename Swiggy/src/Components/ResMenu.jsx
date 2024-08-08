import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RES_MENU } from "../constants/constants";
// import { RES_MENU_IMG } from "../constants/constants";
import ResMenuCard from "./ResMenuCard";

const ResMenu = () => {
    const { resid } = useParams();

    const [resName, setResName] = useState("");
    const [resItemText, setResItemText] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => { fetchFromSwiggyResMenuAPI() }, []);

    const fetchFromSwiggyResMenuAPI = async () => {
        const data = await fetch(RES_MENU + resid);
        const json = await data.json();

        // console.log(json);

        // Name - KFC
        // console.log(json?.data?.cards[0]?.card?.card?.text);
        // Item Text - Recommended
        // console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title);
        // Item Array
        // console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        // console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name);    // Paneer Taka Tak

        setResName(json?.data?.cards[0]?.card?.card?.text);
        setResItemText(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title);
        setItems(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">{resName} Menu</h1>
            <h3 className="text-center">Res ID = {resid}</h3>

            <div className="row">
                <h3 className="bg-light">{resItemText}</h3>

                {/* <ResMenuCard obj={items[0]} />
                <ResMenuCard obj={items[1]} />
                <ResMenuCard obj={items[2]} />
                <ResMenuCard obj={items[3]} /> */}

                {
                    items.map(
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
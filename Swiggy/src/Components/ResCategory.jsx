import { useState } from "react";
import ResMenuCard from "./ResMenuCard";

const ResCategory = (props) => {
    // console.log(props);  

    const { title } = props?.obj?.card?.card || "";
    const { itemCards } = props?.obj?.card?.card || [];

    const [isVisible, setIsVisible] = useState(false);

    // console.log(itemCards);

    const handleBtn = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div className="w-6/12 mx-auto bg-slate-100 my-2 p-2 shadow-lg">

                {/* Header */}
                <div className="flex justify-between my-3 cursor-pointer" onClick={handleBtn}>
                    <span className="font-semibold text-lg">{title} ({itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                {/* Menu Cards */}
                <div className="flex flex-wrap">
                    {
                        isVisible && itemCards.map(
                            (obj) => {
                                return <ResMenuCard obj={obj?.card?.info} key={obj.card.info.id} />
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ResCategory;
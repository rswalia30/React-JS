import ResMenuCard from "./ResMenuCard";

const ResCategory = (props) => {
    // console.log(props);  

    const { title } = props?.obj?.card?.card || "";
    const { itemCards } = props?.obj?.card?.card || [];

    // console.log(itemCards);

    return (
        <>
            <div className="w-6/12 mx-auto bg-slate-100 my-2 p-2 shadow-lg ">
                <div className="flex justify-between my-3">
                    <span className="font-semibold text-lg">{title} ({itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                <div className="flex flex-wrap">
                    {
                        itemCards.map(
                            (obj, i) => {
                                return <ResMenuCard obj={obj} key={i} />
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ResCategory;
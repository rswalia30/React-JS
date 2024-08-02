// const chaskaCafe = {
//     name: "Chaska Cafe",
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
//     time: "60-65",
//     cusine: ["Cafe", "Italian", "Chinese"],
//     stars: "4.3"
// }


// export const Card = () => {
//     return (
//         <div className="col-sm-4 my-3">
//             {/* <h1>This is Card</h1> */}
//             {/* style={{ "width": "18rem" }} */}
//             <div className="card" >
//                 <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43" className="card-img-top img-thumbnail" alt="card-image" />
//                 <div className="card-body">
//                     <h5 className="card-title">{chaskaCafe.name}</h5>
//                     <h6>{chaskaCafe.time} mins</h6>
//                     <p>{chaskaCafe.cusine.join(", ")}</p>
//                     <h6>{chaskaCafe.stars} stars</h6>
//                 </div>
//             </div>
//         </div>
//     )
// }

export const resturantList = [
    {
        id: 101,
        name: "Chaska Cafe",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
        time: "60-65",
        cusine: ["Cafe", "Italian", "Chinese"],
        stars: "4.3"
    },
    {
        id: 102,
        name: "Gupta Bakery",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a",
        time: "20-25",
        cusine: ["Biscuits", "Ice-Cream", "Chinese"],
        stars: "4.6"
    },
    {
        id: 103,
        name: "Wow Momo",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/crncfqmsuosriqcrp9ez",
        time: "35-40",
        cusine: ["Cafe", "Italian", "Chinese"],
        stars: "3.7"
    }
];


// eslint-disable-next-line react/prop-types
export const Card = ({ name, img, time, cusine, stars }) => {
    // console.log(props);

    // Object Destructuring
    // const { name, img, time, cusine, stars } = resturantList;

    return (
        <div className="col-sm-4 my-3">
            <div className="card" >
                <img src={img} className="card-img-top img-thumbnail" alt="card-image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>{time} mins</h6>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p>{cusine.join(", ")}</p>
                    <h6>{stars} stars</h6>
                </div>
            </div>
        </div>
    )
}
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

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

// export const resturantList = [
//     {
//         id: 101,
//         name: "Chaska Cafe",
//         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
//         time: "60-65",
//         cusine: ["Cafe", "Italian", "Chinese"],
//         stars: "4.3"
//     },
//     {
//         id: 102,
//         name: "Gupta Bakery",
//         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a",
//         time: "20-25",
//         cusine: ["Biscuits", "Ice-Cream", "Chinese"],
//         stars: "4.6"
//     },
//     {
//         id: 103,
//         name: "Wow Momo",
//         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/crncfqmsuosriqcrp9ez",
//         time: "35-40",
//         cusine: ["Cafe", "Italian", "Chinese"],
//         stars: "3.7"
//     }
// ];


// More Beautiful Cards
// const Card = ({ img, name, stars, time, cusine }) => {
//     return (
//         <div className="col-md-3">
//             <div className="card text-dark bg-light my-3">
//                 <img src={img} alt="card-img" className="img-thumbnail" style={{ "aspectRatio": "4/3", "width": "auto", "height": "auto" }} />
//                 <div className="card-body">
//                     <h4 className="card-title" >{name.length < 15 ? name : name.substring(0, 12) + "..."} </h4>

//                     {/* Stars Logo */}
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
//                         <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
//                         <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
//                         <defs>
//                             <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
//                                 <stop stopColor="#21973B"></stop>
//                                 <stop offset="1" stopColor="#128540"></stop>
//                             </linearGradient>
//                         </defs>
//                     </svg>

//                     <span> {stars} • <b>{time} mins</b></span>
//                     <p>{cusine}</p>
//                     {/* <p>{loc}</p> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

const Card = ({ name, img, time, cusine, stars }) => {
    // console.log(props);

    // Object Destructuring
    // const { name, img, time, cusine, stars } = resturantList;

    return (
        <div className="col-sm-3 mt-4">
            <div className="card bg-light">
                <img src={img} className="card-img-top img-thumbnail" style={{ aspectRatio: "3/2" }} alt="card-image" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    {/* Stars Logo */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true">
                        <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                        <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                        <defs>
                            <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#21973B"></stop>
                                <stop offset="1" stopColor="#128540"></stop>
                            </linearGradient>
                        </defs>
                    </svg>

                    <span> {stars} • <b>{time} mins</b></span>
                    <p>{cusine}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
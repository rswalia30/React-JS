/* eslint-disable no-import-assign */
import { Card } from "./Card"
// import resturantList from "../utils/mockData"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {

    /******************************** useState() Hook ************************************************ */
    // Normal JS variable
    let list2 = [
        {
            id: 101,
            name: "Chaska Cafe",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
            time: "60-65",
            cusine: ["Cafe", "Italian", "Chinese"],
            stars: "3.8",
        },
        {
            id: 102,
            name: "Gupta Bakery",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a",
            time: "20-25",
            cusine: ["Biscuits", "Ice-Cream", "Chinese"],
            stars: "4.6",
        },
        {
            id: 103,
            name: "Meaow Momo2 ",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a",
            time: "35-40",
            cusine: ["Cafe", "Italian", "Chinese"],
            stars: "4.9",
        },
    ];

    // State Variable -> super powerful variable
    // const [list] = useState([]);             // Default Value : empty list

    // const [list, setList] = useState([
    //     {
    //         id: 101,
    //         name: "Chaska Cafe",
    //         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
    //         time: "60-65",
    //         cusine: ["Cafe", "Italian", "Chinese"],
    //         stars: "3.8",
    //     },
    //     {
    //         id: 102,
    //         name: "Gupta Bakery",
    //         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a",
    //         time: "20-25",
    //         cusine: ["Biscuits", "Ice-Cream", "Chinese"],
    //         stars: "4.6",
    //     },
    //     {
    //         id: 103,
    //         name: "Wow Momo",
    //         img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/crncfqmsuosriqcrp9ez",
    //         time: "35-40",
    //         cusine: ["Cafe", "Italian", "Chinese"],
    //         stars: "4.9",
    //     },
    // ]);

    // const [list, setList] = useState([]);
    const [list, setList] = useState(list2);

    // Array Destructuring
    // const arr = useState(list2);
    // const [list, setList] = arr;
    // const list = arr[0]; 
    // const setList = arr[1];

    /******************************** useEffect() Hook ************************************************ */

    // console.log("Body is going to render");

    // Do something after Rendering the Component
    useEffect(() => {
        // console.log("After Rendering Component");
        fetchDataFromAPI();
    }, []);

    const fetchDataFromAPI = async () => {
        const data = await fetch("http://localhost:8080/res");  // SpringBoot
        const json = await data.json();
        // console.log(json);
        setList(json);      // Update State Variable
    }

    // Conditional Rendering : return Fake Page until API returns actual data
    // if (list.length === 0) {
    //     return <Shimmer />;
    // }

    return (list.length === 0) ? <Shimmer /> : (
        <div className="container">
            <button
                className="btn btn-primary mt-3"
                onClick={() => {
                    const filteredList = list.filter(
                        (obj) => obj.stars > 4
                    );
                    // It will re-render our Component
                    setList(filteredList);
                    // console.log(filteredList);
                }}
            >
                Top Rated Restraunts
            </button>

            <div className="row">
                {/* <Card resturantList={resturantList[0]} />
                <Card resturantList={resturantList[1]} />
                <Card resturantList={resturantList[2]} /> */}

                {/* We have to pass all properties(name,img,time,cusine,stars) */}
                {/* <Card name={resturantList[0].name} img={resturantList[0].img} /> */}

                {/* Instead use :- Spread Operator */}

                {/* <Card {...resturantList[0]} />
                <Card {...resturantList[1]} />
                <Card {...resturantList[2]} /> */}

                {/* LOOP */}
                {
                    // resturantList.map((resturant, index) => {
                    //     return <Card {...resturant} key={index} />
                    // })

                    // resturantList.map((resturant) => {
                    //     return <Card {...resturant} key={resturant.id} />
                    // })

                    // list - State Variable
                    list.map((resturant) => {
                        return <Card {...resturant} key={resturant.id} />
                    })
                }
            </div>
        </div>
    )
}

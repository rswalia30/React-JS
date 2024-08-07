/* eslint-disable react/jsx-key */
/* eslint-disable no-import-assign */
import Card from "./Card"
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { CLOUDINARY_IMG_URL } from "../utils/constants";

const Body = () => {

    // Normal JS variable
    let normalList = [
        {
            id: 101,
            name: "Chaska Cafe",
            img: CLOUDINARY_IMG_URL + "/uxgpy3bwmc5rsojmtw43",
            time: "60-65",
            cusine: ["Cafe", "Italian", "Chinese"],
            stars: "3.8",
        },
        {
            id: 102,
            name: "Gupta Bakery",
            img: CLOUDINARY_IMG_URL + "/76a05b39545d5a2bf80d6a3e3e46544a",
            time: "20-25",
            cusine: ["Biscuits", "Ice-Cream", "Chinese"],
            stars: "4.6",
        }
    ];

    // const [list, setList] = useState([]);             // Default Value : empty list
    /******************************** useState() Hook ************************************************ */

    // Local State Variable -> super powerful variable
    const [list, setList] = useState(normalList);           // original : 14 items
    const [filteredList, setFilteredList] = useState(list); // copy : 14 items
    const [searchtext, setSearchText] = useState("");

    // Array Destructuring
    // const arr = useState(list2);
    // const [list, setList] = arr;
    // const list = arr[0]; 
    // const setList = arr[1];

    /******************************** useEffect() Hook ************************************************ */

    // Do something after Rendering the Component
    // useEffect(() => {
    //     console.log("useEffect called")
    // }, [searchtext]);

    useEffect(() => { fetchDataFromAPI() }, []);

    // SpringBoot
    const fetchDataFromAPI = async () => {
        // const data = await fetch("http://localhost:8080/res");   // SpringBoot
        const data = await fetch(SWIGGY_API);                    // Swiggy API
        const json = await data.json();
        console.log(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);       // 25
        const res = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || [];  // 24
        setList(res);              // Update State Variable - original
        setFilteredList(res);      // Update State Variable - copy
    }

    // const fetchDataFromAPI = async () => {
    //     try {
    //         const response = await fetch(SWIGGY_API); // Swiggy API
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         const json = await response.json();
    //         console.log(json); // Log the entire response to check the structure
    //         console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);  // CHECK IF IT IS CARDS[3] / CARDS[4]
    //         const res = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || [];
    //         setList(res);              // Update State Variable - original
    //         setFilteredList(res);      // Update State Variable - copy
    //     } catch (error) {
    //         console.error("Failed to fetch data from API:", error);
    //     }
    // }


    // console.log("Body is going to render");

    /******************************** Main Body  ************************************************ */
    return (list.length === 0) ? <Shimmer /> : (
        <div className="container">
            <div className="row">
                {/* Search Functionality */}
                <div className="col-md-8 mt-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Search"
                        // bind input text with State Variable
                        value={searchtext}
                        onChange={(e) => { setSearchText(e.target.value) }}
                        // Filter Cards
                        onKeyUp={() => {
                            const filteredList2 = list.filter(
                                (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                            )
                            setFilteredList(filteredList2);
                        }}
                    />
                </div>

                {/* Top Rated Restraunts */}
                <div className="col-md-4">
                    <button
                        className="btn btn-success mt-3 w-100"
                        onClick={() => {
                            const filteredList = list.filter((obj) => obj.info.avgRating > 4.6);
                            setFilteredList(filteredList);
                            // setList(filteredList);
                        }}
                    >
                        Top Rated Restraunts
                    </button>
                </div>
            </div>

            {/* Render Cards */}
            <div className="row">
                {/* <Card resturantList={resturantList[0]} />
                <Card resturantList={resturantList[1]} />
                <Card resturantList={resturantList[2]} /> */}

                {
                    filteredList.map(
                        (obj, index) => { return <Card res={obj} key={index} /> }
                        // (obj) => { return <Card res={obj} key={obj.info.id} /> }
                    )
                }

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
                    // list.map((resturant) => {
                    //     return <Card {...resturant} key={resturant.id} />
                    // })

                    // (filteredList.length === 0) ?
                    //     <Shimmer /> :
                    //     filteredList.map(
                    //         (res) => {
                    //             return <Card {...res} key={res.id} />
                    //         }
                    //     )
                }
            </div>
        </div>
    );
}

export default Body;
import Card from "./Card";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../constants/constants";

const Body = () => {
    const [list, setList] = useState([]);

    useEffect(() => { fetchJSONFromAPI() }, []);

    const fetchJSONFromAPI = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        // console.log(json);
        // console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);
        const allRes = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        setList(allRes);
    }

    return (
        <div className="container">
            <div className="row">
                {/* <Card obj={list[0]} /> */}
                {/* <Card obj={list[1]} />
                <Card obj={list[2]} />
                <Card obj={list[3]} /> */}

                {
                    list.map(
                        (obj, index) => { return <Card res={obj} key={index} /> }
                    )

                }
            </div>
        </div>
    )
}

export default Body;
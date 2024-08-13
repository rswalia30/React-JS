import Card from "./Card";
import { useEffect, useState, useContext } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState(list);
    const [searchText, setSearchText] = useState("");
    const { user, setUser } = useContext(UserContext);

    useEffect(() => { fetchJSONFromAPI() }, []);

    const fetchJSONFromAPI = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        // console.log(json);
        // console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);
        const allRes = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;     // check cards[3] / cards[4]
        setList(allRes);
        setFilteredList(allRes);
    }

    const onlineStatus = useOnlineStatus();

    const handleTopRated = () => {
        const filtered = list.filter(
            (obj) => obj.info.avgRating >= 4.5
        )
        setFilteredList(filtered);
    }

    const handleSearch = () => {
        const filtered2 = list.filter(
            (obj) => obj?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setFilteredList(filtered2);
    }

    if (onlineStatus === false) {
        return <h1>You are currently offline !!!</h1>
    }

    return (
        <>
            <div className="flex my-4 justify-between">

                {/* Search Functionallity */}
                <div>
                    <input type="search"
                        placeholder="Search Restaurants"
                        className="mx-2 p-4 text-sm text-gray-900 border border-gray-800 rounded-lg bg-gray-50 "
                        // bind search filed with state variable
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                        onKeyUp={handleSearch}
                    />
                </div>

                <input type="text"
                    placeholder="Name"
                    className="mx-2 p-4 text-sm text-gray-900 border border-gray-800 rounded-lg bg-gray-50 "
                    value={user.name}
                    onChange={(e) => setUser({
                        ...user,
                        name: e.target.value,
                    })}
                />

                <input type="text"
                    placeholder="Email"
                    className="mx-2 p-4 text-sm text-gray-900 border border-gray-800 rounded-lg bg-gray-50 "
                    value={user.email}
                    onChange={(e) => setUser({
                        ...user,
                        email: e.target.value,
                    })}
                />

                {/* Top Rated Restaurants */}
                <div>
                    <button
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={handleTopRated}
                    >Top Rated Restaurants</button>
                </div>
            </div>

            {/* Render Cards */}
            <div className="flex flex-wrap justify-center">
                {/* <Card obj={list[0]} /> */}
                {/* <Card obj={list[1]} />
                <Card obj={list[2]} />
                <Card obj={list[3]} /> */}

                {
                    (filteredList.length === 0) ? <Shimmer /> :
                        filteredList.map(
                            (obj) => { return <Card res={obj} key={obj?.info?.id} /> }
                        )
                }
            </div>
        </>
    )
}

export default Body;
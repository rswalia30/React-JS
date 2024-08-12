import { SWIGGY_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { useEffect } from "react";

const Navbar = () => {
    const [btnText, setBtnText] = useState("Login");

    // useEffect(() => { console.log("useEffect called") })
    // useEffect(() => { console.log("useEffect called") }, [])
    // useEffect(() => { console.log("useEffect called") }, [btnText])

    // console.log("Navbar render");

    const onlineStatus = useOnlineStatus();

    const { user } = useContext(UserContext);

    return (
        <nav className="bg-purple-200 flex justify-between h-20 items-center">
            {/* Logo */}
            <div>
                <Link to="/">
                    <img src={SWIGGY_LOGO} alt="" />
                </Link>
                <h1>{user.name} - {user.email}</h1>
            </div>
            {/* Links */}
            <div>
                <ul className="flex">
                    <li className="mx-2">
                        <NavLink to="/"
                            className={({ isActive }) => {
                                return isActive ? "text-orange-400" : "text-black";
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/github"
                            className={({ isActive }) => {
                                return isActive ? "text-orange-400" : "text-black";
                            }}
                        >
                            Github
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/contact"
                            className={({ isActive }) => {
                                return isActive ? "text-orange-400" : "text-black";
                            }}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className="mx-2 text-xl font-serif bg-green-200 p-2">
                        <NavLink to="/instamart"
                            className={({ isActive }) => {
                                return isActive ? "text-orange-400" : "text-black";
                            }}
                        >
                            InstaMart
                        </NavLink>
                    </li>

                    <li className="mx-2">
                        <button
                            className="text-white bg-blue-700 p-2 hover:bg-blue-800"
                            onClick={() => {
                                (btnText === "Login") ? setBtnText("Logout") : setBtnText("Login");
                            }}
                        >{btnText}</button>
                    </li>
                    <li className="mx-2">
                        <h5 className="my-auto">Online Status : {onlineStatus ? "🟢" : "🔴"} </h5>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar;

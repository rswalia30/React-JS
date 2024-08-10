import { SWIGGY_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
// import { useEffect } from "react";

const Navbar = () => {
    const [btnText, setBtnText] = useState("Login");

    // useEffect(() => { console.log("useEffect called") })
    // useEffect(() => { console.log("useEffect called") }, [])
    // useEffect(() => { console.log("useEffect called") }, [btnText])

    // console.log("Navbar render");

    const onlineStatus = useOnlineStatus();

    return (
        <nav className="bg-purple-200 flex justify-between h-20 items-center">
            {/* Logo */}
            <div>
                <Link to="/">
                    <img src={SWIGGY_LOGO} alt="" />
                </Link>
            </div>
            {/* Links */}
            <div>
                <ul className="flex">
                    <li className="mx-2">
                        <NavLink to="/"
                            className={({ isActive }) => {
                                return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/github"
                            className={({ isActive }) => {
                                return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                            }}
                        >
                            Github
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to="/contact"
                            className={({ isActive }) => {
                                return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                            }}
                        >
                            Contact
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

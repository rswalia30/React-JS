/* eslint-disable react/jsx-no-duplicate-props */
import { SWIGGY_LOGO } from "../constants/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [btnText, setBtnText] = useState("Login");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={SWIGGY_LOGO} alt="" width="auto" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <NavLink to="/"
                                className={({ isActive }) => {
                                    return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/about"
                                className={({ isActive }) => {
                                    return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/contact"
                                className={({ isActive }) => {
                                    return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                                }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-info mx-2"
                    onClick={() => {
                        (btnText === "Login") ? setBtnText("Logout") : setBtnText("Login");
                    }}
                >{btnText}</button>
            </div>
        </nav >

    )
}

export default Navbar;
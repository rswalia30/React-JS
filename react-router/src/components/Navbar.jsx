import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [btnText, setBtnText] = useState("Login");

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src="/vite.svg" alt="" width="30" height="24" />
                        React Router
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2 my-2">
                                {/* <a className="nav-link active" href="/">Home</a> */}
                                {/* <Link to="/">Home</Link> */}
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "bg-warning" : "bg-white"}
                                >
                                    Home
                                </NavLink>

                            </li>
                            <li className="nav-item mx-2 my-2">
                                {/* <a className="nav-link" href="/about">About</a> */}
                                {/* <Link to="/about">About</Link> */}
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => isActive ? "bg-warning" : "bg-white"}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item mx-2 my-2">
                                {/* <a className="nav-link" href="/contact">Contact</a> */}
                                {/* <Link to="/contact">Contact</Link> */}
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => isActive ? "bg-warning" : "bg-white"}
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown my-2">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    City
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Amritsar</a></li>
                                    <li><a className="dropdown-item" href="#">Delhi</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something Else</a></li>
                                </ul>
                            </li>
                            <li className="nav-item my-2">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Offers</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary mx-3" onClick={() => {
                        (btnText === "Login") ?
                            setBtnText("Logout") : setBtnText("Login");
                    }}>{btnText}</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
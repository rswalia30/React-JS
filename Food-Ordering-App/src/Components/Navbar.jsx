import { useState } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    // normal JS variable
    // let btnName = "Login";

    // useState - superpowerful JS variable
    const [btn, setBtn] = useState("Login");

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src="/swiggy-favicon.svg" alt="" width="30" height="24" />
                        Swiggy
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
                                    className={({ isActive }) => isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"}
                                >Home
                                </NavLink>
                            </li>
                            <li className="nav-item mx-2 my-2">
                                {/* <a className="nav-link" href="/about">About</a> */}
                                {/* <Link to="/about">About</Link> */}
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"}
                                >About
                                </NavLink>
                            </li>
                            <li className="nav-item mx-2 my-2">
                                {/* <a className="nav-link" href="/contact">Contact</a> */}
                                {/* <Link to="/contact">Contact</Link> */}
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"}
                                >Contact
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
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
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Offers</a>
                            </li>
                        </ul>

                        <button className="btn btn-primary mx-4"
                            onClick={() => {
                                // whenever state variable updates, React re-renders the Component
                                // setBtn("Logout");
                                btn === "Login" ? setBtn("Logout") : setBtn("Login");
                            }}
                        >{btn}</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
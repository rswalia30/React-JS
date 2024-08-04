import { useState } from "react";

export const Header = () => {

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

                        {/* Links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
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

                        <button className="btn btn-primary mx-4" onClick={() => {
                            // btnName = "Logout";
                            // console.log(btnName);

                            // whenever state variable updates, React re-renders the Component
                            // setBtn("Logout");

                            btn === "Login" ? setBtn("Logout") : setBtn("Login");
                        }}
                        >{btn}</button>

                        {/* Search */}
                        <form className="d-flex">
                            <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
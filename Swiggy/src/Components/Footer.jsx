import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="d-flex flex-column min-vh-100">
            <p className="text-center p-2 bg-light mt-auto">Rohit Singh Walia | &copy; 2024</p>
            <p className="text-center">{user.name} - {user.email}</p>
        </div>
    )
}

export default Footer;
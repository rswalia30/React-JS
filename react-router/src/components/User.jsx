import { useParams } from "react-router-dom";

const User = () => {
    // const params = useParams();
    const { userid } = useParams();
    return (
        <div className="container">
            <h1 className="text-center">This is User Page</h1>
            {/* <h2>User ID = {params.userid}</h2> */}
            <h2>User ID = {userid}</h2>
        </div>
    )
}

export default User;
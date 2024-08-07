import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="container text-center bg-dark text-white">
            <h1>I am Error Page</h1>
            <h2>{error.status} {error.statusText}</h2>
            <p>{error.data}</p>
        </div>
    )
}

export default Error;
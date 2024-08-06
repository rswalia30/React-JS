import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center bg-dark text-light">
            <h1>Oops Something Went Wrong</h1>
            <h2>{error.status} {error.statusText}</h2>
            <p>{error.data}</p>
        </div>
    )
}

export default Error;
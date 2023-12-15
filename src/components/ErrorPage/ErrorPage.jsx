import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">Oops!!!</h2>
            <p className="mt-2">{error.statusText || error.message}</p>
            <Link to={'/'}>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;
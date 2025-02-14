import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <>
            <h1>Page not Found</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/">Go Home</NavLink>
        </>
    )
}
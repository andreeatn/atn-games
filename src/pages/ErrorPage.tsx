import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container-fluid m-2 m-md-5">
      <h1 className="display-1 text-success">Oops,</h1>
      {isRouteErrorResponse(error) ? (
        <h2 className="display-3 text-primary">The page does not exist.</h2>
      ) : (
        <h2 className="display-3 text-primary">Some error occured.</h2>
      )}
      <Link to={"/"} className="text-success fs-4">
        Go back to home
      </Link>
    </div>
  );
}

export default ErrorPage;

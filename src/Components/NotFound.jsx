import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mt-16 text-center">
      <h1 className="text-red-400 font-semibold text-3xl mb-8">
        404 Error!!! Go back to home
      </h1>
      <Link to="/" className="text-xl font-bold hover:text-teal-400 ">Home</Link>
    </div>
  );
}

export default NotFound;

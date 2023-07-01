import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between text-center">
        <div className="flex">
          <h1 className="pt-4 pb-4 pl-16 pr-4 tracking-wider text-teal-400 text-3xl font-sans  font-medium">
            Recipe-Hub
          </h1>
        </div>
        <div className="pt-5">
          <Link
            to="/"
            className="pr-3 pl-3 mt-4 mb-4 mr-8 rounded-full font-sans font-normal text-teal-400 text-xl transition ease-in-out duration-500 hover:text-slate-50 hover:bg-teal-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="pr-3 pl-3 mt-4 mb-4 mr-16 rounded-full font-sans font-normal text-teal-400 text-xl transition ease-in-out duration-500 hover:text-slate-50 hover:bg-teal-400"
          >
            About
          </Link>
        </div>
      </div>
      <hr className="border-teal-400 border-[1.5px] w-[90%] m-auto" />
    </div>
  );
}

export default Navbar;

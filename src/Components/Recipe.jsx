import { Link } from "react-router-dom";

function Recipe(props) {
  const id = props.id;
  return (
    <div
      key={id}
      className="shadow-md hover:shadow-xl bg-slate-100 w-auto text-center rounded-2xl border-2 border-slate-400 transition ease-in-out duration-300 hover:border-4 hover:border-teal-400"
    >
      <img
        src={props.imgThumb}
        alt={props.recipeName}
        className="rounded-t-xl border-b-2 border-slate-800"
      />
      <div>
        <h3 className="p-1 text-xl font-sans text-teal-800 font-bold">
          {props.recipeName}
        </h3>
        {props.cuisine && (
          <div>
            <hr className="border-slate-300 border-[1px]" />
            <p className="p-1 font-serif">Cuisine : {props.cuisine}</p>
          </div>
        )}
        {props.category && (
          <div>
            <hr className="border-slate-300 border-[1px]" />
            <p className="p-1 font-serif">Category : {props.category}</p>
          </div>
        )}
        <hr className="border-slate-300 border-[1px]" />
        <Link
          to={`/recipe/${id}`}
          className="p-1 font-serif cursor-pointer hover:text-teal-400"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Recipe;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeMain() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch recipe.");
        }
        return res.json();
      })
      .then((data) => {
        setRecipe(data.meals[0]);
      })
      .catch((err) => {
        console.log("Error : ", err.message);
      });
  }, []);

  return (
    <div>
      <h1 className="pt-8 text-center text-3xl font-sans font-semibold text-teal-900">
        {recipe.strMeal}
      </h1>
      <div className="m-5 p-5 font-serif grid grid-cols-2 grid-flow-row">
        <div className="text-slate-500">
          <p className="text-xl pl-8 py-5">
            <span className="font-bold text-slate-950">Cuisine : </span>
            {recipe.strArea}
          </p>
          <p className="text-xl pl-8 py-5">
            <span className="font-bold text-slate-950">Category : </span>
            {recipe.strCategory}
          </p>
          <div className="text-xl pl-8 py-5">
            <p className="text-xl font-bold pb-4 text-slate-950">Ingredients</p>
            <ol>
              {recipe.strIngredient1 && (
                <li>
                  {recipe.strIngredient1} - {recipe.strMeasure1}
                </li>
              )}
              {recipe.strIngredient2 && (
                <li>
                  {recipe.strIngredient2} - {recipe.strMeasure2}
                </li>
              )}
              {recipe.strIngredient3 && (
                <li>
                  {recipe.strIngredient3} - {recipe.strMeasure3}
                </li>
              )}
              {recipe.strIngredient4 && (
                <li>
                  {recipe.strIngredient4} - {recipe.strMeasure4}
                </li>
              )}
              {recipe.strIngredient5 && (
                <li>
                  {recipe.strIngredient5} - {recipe.strMeasure5}
                </li>
              )}
              {recipe.strIngredient6 && (
                <li>
                  {recipe.strIngredient6} - {recipe.strMeasure6}
                </li>
              )}
              {recipe.strIngredient7 && (
                <li>
                  {recipe.strIngredient7} - {recipe.strMeasure7}
                </li>
              )}
              {recipe.strIngredient8 && (
                <li>
                  {recipe.strIngredient8} - {recipe.strMeasure8}
                </li>
              )}
              {recipe.strIngredient9 && (
                <li>
                  {recipe.strIngredient9} - {recipe.strMeasure9}
                </li>
              )}
              {recipe.strIngredient10 && (
                <li>
                  {recipe.strIngredient10} - {recipe.strMeasure10}
                </li>
              )}
              {recipe.strIngredient11 && (
                <li>
                  {recipe.strIngredient11} - {recipe.strMeasure11}
                </li>
              )}
              {recipe.strIngredient12 && (
                <li>
                  {recipe.strIngredient12} - {recipe.strMeasure12}
                </li>
              )}
              {recipe.strIngredient13 && (
                <li>
                  {recipe.strIngredient13} - {recipe.strMeasure13}
                </li>
              )}
              {recipe.strIngredient14 && (
                <li>
                  {recipe.strIngredient14} - {recipe.strMeasure14}
                </li>
              )}
              {recipe.strIngredient15 && (
                <li>
                  {recipe.strIngredient15} - {recipe.strMeasure15}
                </li>
              )}
              {recipe.strIngredient16 && (
                <li>
                  {recipe.strIngredient16} - {recipe.strMeasure16}
                </li>
              )}
              {recipe.strIngredient17 && (
                <li>
                  {recipe.strIngredient17} - {recipe.strMeasure17}
                </li>
              )}
              {recipe.strIngredient18 && (
                <li>
                  {recipe.strIngredient18} - {recipe.strMeasure18}
                </li>
              )}
              {recipe.strIngredient19 && (
                <li>
                  {recipe.strIngredient19} - {recipe.strMeasure19}
                </li>
              )}
              {recipe.strIngredient20 && (
                <li>
                  {recipe.strIngredient20} - {recipe.strMeasure20}
                </li>
              )}
            </ol>
          </div>
        </div>
        <div>
          <img
            className="border-slate-500 mt-5 border-4 w-[70%] ml-24"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <p className="ml-24 p-4 mr-20 mt-5 text-center font-semibold text-teal-900">
            View full recipe on{" "}
            <a
              className="bg-red-500 font-sans p-2 text-slate-100 rounded-2xl transition ease-in-out duration-300 hover:bg-red-400"
              href={recipe.strYoutube}
            >
              YouTube
            </a>
          </p>
        </div>
      </div>
      <div className="m-5 p-5 text-xl pl-8 py-5">
        <p className=" ml-4 text-xl font-bold font-serif text-slate-950">Instructions</p>
        <p className="ml-4 text-slate-500">{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeMain;

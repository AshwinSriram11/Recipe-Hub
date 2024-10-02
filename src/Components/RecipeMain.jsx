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
  }, [id]);

  const ingredientIdx = [];
  let cnt = 1;
  for (let i = 0; i <= 20; i++) {
    ingredientIdx.push(cnt);
    cnt++;
  }

  const ingredientList = ingredientIdx
    .map((index) => {
      const ingredient = recipe[`strIngredient${index}`];
      const measure = recipe[`strMeasure${index}`];

      if (ingredient && ingredient.trim()) {
        return (
          <li key={index}>
            {ingredient} - {measure}
          </li>
        );
      }
      return null;
    })
    .filter((item) => item !== null);

  return (
    <div>
      <h1 className="pt-8 text-center text-3xl font-sans font-semibold text-teal-900">
        {recipe.strMeal}
      </h1>
      <div className="m-5 p-5 font-serif grid grid-cols-1 text-center md:grid-cols-2 md:text-left">
        <div className="text-slate-500">
          <p className="text-xl pl-8 pt-5 pb-2">
            <span className="font-bold text-slate-950">Cuisine : </span>
            {recipe.strArea}
          </p>
          <p className="text-xl pl-8 pt-2 pb-2">
            <span className="font-bold text-slate-950">Category : </span>
            {recipe.strCategory}
          </p>
          <div className="text-xl pl-8 py-5">
            <p className="text-xl font-bold pb-4 text-slate-950">Ingredients</p>
            <ol>
              {ingredientList}
            </ol>
          </div>
        </div>
        <div>
          <img
            className="border-slate-500 mt-5 border-4 w-[70%] ml-24 md:ml-18 "
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <p className="ml-24 p-4 mr-20 mt-5 text-center font-semibold text-teal-900">
            View full recipe on{"   "}
            <a
              className="bg-red-500 font-sans p-2 leading-8 text-slate-100 rounded-2xl transition ease-in-out duration-300 hover:bg-red-400"
              href={recipe.strYoutube}
            >
              YouTube
            </a>
          </p>
        </div>
      </div>
      <div className="m-5 p-5 text-xl pl-8 py-5">
        <p className=" ml-4 text-xl font-bold font-serif text-slate-950">
          Instructions
        </p>
        <p className="ml-4 text-slate-500">{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeMain;

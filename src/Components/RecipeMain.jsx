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
      <h1>{recipe.strMeal}</h1>
      <h3>Cuisine : {recipe.strArea}</h3>
      <p>Category : {recipe.strCategory}</p>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeMain;

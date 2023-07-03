import { useEffect, useState } from "react";
import Recipe from "./Recipe";

function HomePageRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const Promises = [];
        for (let i = 0; i < 21; i++) {
          Promises.push(
            fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
          );
        }
        const res = await Promise.all(Promises);
        const data = await Promise.all(res.map((res) => res.json()));
        const recipeList = data.map((mealData) => mealData.meals[0]);
        setRecipes(recipeList);
        setIsFetched(true);
      } catch (err) {
        console.log("Error : ", err.message);
      }
    };

    if (!isFetched) {
      fetchRecipes();
    }
  }, [isFetched]);

  return (
    <div>
      <div className="text-center text-4xl font-serif font-semibold ">
        <h1 className="text-teal-900 py-8">Explore Recipes</h1>
        {!isFetched && (
          <div className="text-xl font-normal">
            <p className="pt-8">Loading....</p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-4">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <Recipe
                id={Number(recipe.idMeal)}
                imgThumb={recipe.strMealThumb}
                recipeName={recipe.strMeal}
                cuisine={recipe.strArea}
                category={recipe.strCategory}
              />
            );
          })}
      </div>
    </div>
  );
}

export default HomePageRecipes;

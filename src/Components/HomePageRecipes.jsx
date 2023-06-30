import { useEffect, useState } from "react";
import Recipe from "./Recipe";

function HomePageRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const Promises = [];
        for (let i = 0; i < 20; i++) {
          Promises.push(
            fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
          );
        }
        const res = await Promise.all(Promises);
        const data = await Promise.all(res.map((response) => response.json()));
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
    console.log(recipes);
  }, [isFetched]);

  return (
    <div>
      <div className="text-center text-3xl font-serif font-medium text-teal-900 py-8">
        <h1>Explore Recipes</h1>
      </div>
      <div>
        {!recipes && (
          <div>
            <p>Loading....</p>
          </div>
        )}
        {recipes &&
          recipes.map((recipe) => {
            return (
              <div>
                <Recipe
                  imgThumb={recipe.strMealThumb}
                  recipeName={recipe.strMeal}
                  cuisine={recipe.strArea}
                  category={recipe.strCategory}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomePageRecipes;

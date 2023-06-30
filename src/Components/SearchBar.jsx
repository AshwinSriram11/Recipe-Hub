import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import HomePageRecipes from "./HomePageRecipes";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function HandleChange(event) {
    setSearchInput(event.target.value);
  }

  function HandleClick() {
    setIsLoading(true);
    fetchRecipe(searchInput);
    setSearchInput("");
  }

  const fetchRecipe = async (searchInput) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      );
      const data = await res.json();
      console.log(data.meals);
      setRecipe(data.meals);
      setIsLoading(false);
    } catch (err) {
      console.log("Error : ", err.message);
    }
  };

  return (
    <div>
      <div className="p-6 mt-10 text-center font-sans">
        <input
          onChange={HandleChange}
          value={searchInput}
          type="text"
          placeholder="Search....."
        />
        <button onClick={HandleClick} type="submit">
          Submit
        </button>
      </div>

      <HomePageRecipes />

      {/* <div className="flex text-center flex-col-3">
        {isLoading && <p>Loading.....</p>}
        {!isLoading && !recipe && (
          <div>
            <p>Sorry ! No Results found</p>
          </div>
        )}
        {recipe &&
          recipe.map((meal) => {
            return (
              <Recipe
                id={meal.idMeal}
                recipeName={meal.strMeal}
                imgThumb={meal.strMealThumb}
                cuisine={meal.strArea}
                category={meal.strCategory}
              />
            );
          })}
      </div> */}
    </div>
  );
}

export default SearchBar;

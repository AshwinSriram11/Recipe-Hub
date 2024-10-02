import { useState } from "react";
import Recipe from "./Recipe";
import HomePageRecipes from "./HomePageRecipes";
import FilterButton from "./FilterButton";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function HandleChange(event) {
    setSearchInput(event.target.value);
  }

  function HandleOptionValue(event) {
    console.log(event.target.value);
    setSearchType(event.target.value);
  }

  function HandleClick() {
    setIsLoading(true);
    fetchRecipe(searchInput, searchType);
    setSearchInput("");
  }

  const fetchRecipe = async (searchInput, searchType) => {
    let url = "";
    if (searchType === "name") {
      url += `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    } else if (searchType === "cuisine") {
      url += `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchInput}`;
    } else if (searchType === "category") {
      url += `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`;
    } else {
      url += `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipe(data.meals);
      setIsLoading(false);
    } catch (err) {
      console.log("Error : ", err.message);
    }
  };

  return (
    <div>
      <FilterButton
        HandleChange={HandleChange}
        HandleClick={HandleClick}
        HandleOptionValue={HandleOptionValue}
        searchInput={searchInput}
        searchType={searchType}
      />

      {isLoading && (
        <p className="text-center text-teal-600 font-sans font-medium p-5">
          Loading.....
        </p>
      )}
      {!isLoading && !recipe && (
        <div className="text-center text-xl text-red-400 font-semibold font-sans ">
          <p>Sorry ! No Results found</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-6">
        {recipe &&
          recipe.map((meal) => {
            return (
              <Recipe
                id={Number(meal.idMeal)}
                recipeName={meal.strMeal}
                imgThumb={meal.strMealThumb}
                cuisine={meal.strArea}
                category={meal.strCategory}
              />
            );
          })}
      </div>
      <HomePageRecipes />
    </div>
  );
}

export default SearchBar;

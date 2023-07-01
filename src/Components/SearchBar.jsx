import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import HomePageRecipes from "./HomePageRecipes";

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
      <div className="p-6 mt-10 text-center font-sans grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-0">
        <div className="lg:ml-48 md:ml-24">
          <label className="font-serif text-xl mr-4" htmlFor="searchType">
            Search By
          </label>
          <select
            className="mr-4 md:mr-0 rounded-md px-4 border-slate-400 focus:border-teal-400 border-[2px] focus:outline-none text-xl"
            name="searchType"
            id="searchType"
            value={searchType}
            onChange={HandleOptionValue}
          >
            <option
              className="text-xl font-extralight bg-slate-300 "
              value="name"
            >
              Name
            </option>
            <option
              className="text-xl font-extralight bg-slate-300 "
              value="cuisine"
            >
              Cuisine
            </option>
            <option
              className="text-xl font-extralight bg-slate-300 "
              value="ingredient"
            >
              Ingredient
            </option>
            <option
              className="text-xl font-extralight bg-slate-300 "
              value="category"
            >
              Category
            </option>
          </select>
        </div>
        <div className="lg:mr-48 md:mr-16">
          <input
            className="rounded-lg px-2 py-1 border-slate-400 border-[1.5px] placeholder:font-serif focus:outline-none  hover:border-teal-400 hover:border-[2px]"
            onChange={HandleChange}
            value={searchInput}
            type="text"
            placeholder="Search....."
          />
          <button
            className="bg-teal-300 rounded-xl ml-3 px-2 py-1 text-teal-900 transition ease-in-out duration-300 hover:bg-teal-400"
            onClick={HandleClick}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>

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

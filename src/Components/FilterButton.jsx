import React from "react";
import Options from "./Options";

const FilterButton = ({HandleClick,HandleChange,HandleOptionValue,searchInput,searchType}) => {
  return (
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
          <Options />
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
  );
};

export default FilterButton;

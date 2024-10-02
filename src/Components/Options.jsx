import React from "react";

const Options = () => {
  return (
    <>
      <option className="text-xl font-extralight bg-slate-300 " value="name">
        Name
      </option>
      <option className="text-xl font-extralight bg-slate-300 " value="cuisine">
        Cuisine
      </option>
      <option className="text-xl font-extralight bg-slate-300 " value="ingredient">
        Ingredient
      </option>
      <option className="text-xl font-extralight bg-slate-300 " value="category">
        Category
      </option>
    </>
  );
};

export default Options;

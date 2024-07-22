import React, { useState } from "react";
//import { CATEGORIES } from "../data";

function CategoryFilter({ categories, selectCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(categories);

  const handleClick = (category)=> {
     setSelectedCategory(category)

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
        className={selectedCategory === category ? "selected" : ""}
        key={category}
        id={category}
        onClick= {() => {handleClick(category)}}
        >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;

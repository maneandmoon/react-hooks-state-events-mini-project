import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("")
  const [categoryOption, setCategoryOption] = useState(categories[0])
  
  function handleTextChange(event) {
    setDetails(event.target.value)
    }
  
  function handleCategoryChange(event) {
    setCategoryOption(event.target.value)
    }
  
  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
        text: details,
        category: categoryOption
      }
      onTaskFormSubmit(newTask)
    }
  
    const selectedCategories = categories.slice(1).map((category) => {
      return (
        <option 
          key={category} 
          value={category}>
          {category}
        </option>
      )
    })
    
    return (
      <form className="new-task-form" onSubmit={handleSubmit}>
        <label>
          Details
          <input 
            type="text" 
            name="text" 
            value={details} 
            onChange={handleTextChange} />
        </label>
        <label>
          Category
          <select 
            name="category" 
            value={categoryOption} 
            onChange={handleCategoryChange}>
            {selectedCategories}
          </select>
        </label>
        <input 
          type="submit" 
          value="Add task" />
      </form>
    );
  }
  
  export default NewTaskForm;

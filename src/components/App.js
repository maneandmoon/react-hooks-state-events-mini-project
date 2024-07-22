import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const [taskList, setTaskList] = useState(TASKS);

  const handleDelete = (task) => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.filter(taskEle => 
        taskEle!== task)}
    })
  }


  const filteredTasks = (selectedCategory !== "All")
  ? taskList.filter(task => task.category === selectedCategory)
  : taskList;
  
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);

  function handleTaskFormSubmit(newTask){
      setTaskList([...taskList, newTask])  
  }
  const addTask = (newTask) => {
    this.setSate(prevState => {
      return {tasks: [...prevState.tasks, newTask]}
    })
  }

 
    
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        onSelectedCategory={handleSelectedCategory}
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} />
      <NewTaskForm 
        categories={CATEGORIES} 
        addTask={this.addTask}
        onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList 
        tasks={filteredTasks} 
        setTaskList={setTaskList}
        handleDelete={this.handleDelete}/>
    </div>
  );
};
}

export default App;
import React, { useState } from "react";
import Task from "./Task";


function TaskList({ tasks, selectedCategory, handleDelete}) {
    const [taskList, setTaskList] = useState(tasks);

    const filteredTasks = (selectedCategory !== "All")
    ? taskList.filter(task => task.category === selectedCategory)
    : taskList;

    function handleDelete(taskText) {
    const selectedcategory = tasks.filter((task) => task.text !== taskText)
    setTaskList(selectedCategory)
    }

    const listOfTasks = tasks.map((task, index) => {
      return (
        <div className="tasks">
          <Task 
          key={index} 
          task={task} 
          onDelete={handleDelete} />
  
    </div>
    )}
  );
}
export default TaskList;
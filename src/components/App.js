import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS as INITIAL_TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const[selectedCategory, setSelecredCategory] = useState("All")
  const[tasks, setTasks] = useState(INITIAL_TASKS)
  const filteredTasks = 
    selectedCategory ==='All'
    ? tasks
    : tasks.filter(task=> task.category === selectedCategory)
  //console.log(selectedCategory)
  function handleDeleteTask(deletedTaskText){
    setTasks(prevTasks =>
      prevTasks.filter(task => task.text !== deletedTaskText)
    )
  }
  function handleAddTask(newTask){
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} selectedCategory={selectedCategory} onCategoryChange={setSelecredCategory}/>
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList categories = {CATEGORIES} tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

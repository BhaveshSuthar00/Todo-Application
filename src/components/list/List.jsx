import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'
const ListCompo = () => {
  const { todos } = useSelector((store)=> store);
  const completed = useSelector((store)=> store.todos.filter(task => task.status === true));
  const notCompleted = useSelector((store)=> store.todos.filter(task => task.status === false));
  const [name, setName] = useState('showAll');
  const handleChange = (show) => {
    setName(show);
  }
  if(name === 'showNotCompleted'){
    return <TaskCard handleChange={handleChange} remaining={notCompleted.length} completedTask={completed.length} taskList={notCompleted} />
  }
  if(name === 'showCompleted'){
    return <TaskCard handleChange={handleChange} remaining={notCompleted.length} completedTask={completed.length} taskList={completed} />
  }
  return <TaskCard handleChange={handleChange} remaining={notCompleted.length} completedTask={completed.length} taskList={todos} />
}

export default ListCompo
import { useState, useEffect } from "react";
import './App.css';
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { AddTodo, TodoList } from "./components";
import { FaSun, FaMoon } from "react-icons/fa";
function App() {
  const [tasks, setTasks] = useState(()=>JSON.parse(localStorage.getItem('init')) || [])
  const {colorMode, toggleColorMode} = useColorMode();
  const addTask = (task)=>{
    const id =  Math.floor(Math.random()*1000);
    const newTask = {id, task};
    setTasks((tasks)=>[...tasks, newTask])
  }

  const deleteTask = (id)=>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('init', JSON.stringify(tasks))
    
  }, [tasks])
  useEffect(() => {
    console.log(colorMode)
  
  }, [colorMode])
  return (
    <VStack p={4}>
      <IconButton 
      icon={colorMode === 'light' ? <FaSun/> : <FaMoon/>} 
      isRound='true' 
      size="lg" 
      alignSelf='flex-end'
      onClick={toggleColorMode} />
      <Heading 
      bgGradient="linear(to-r, pink.500, pink.300, blue.300)"
      bgClip="text"
      color="transparent">
        Todo List
      </Heading>
      
      <TodoList tasks= {tasks} deleteTask={deleteTask}  />
      <AddTodo addTask={addTask} />
  
    </VStack>
  );
}

export default App;

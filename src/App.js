import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems,setTodoItems] = useState([]);
  //THIS FUNC.. ADD TODOITEM AND DUE DATE
  const handleNewItem = (itemName, itemDueDate)=>{
    
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate
    },]
    setTodoItems(newTodoItems);

  }
 // THIS FUNC.. for DELETE TODOITEM 
  const handleDeleteItem = (todoItemName)=>{
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    
    

  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo  onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
    </center>
  );
}

export default App;

import React, { useState} from 'react'
import './App.css';



function App() {

  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const InputData = (e) => setInput(e.target.value);

  const AddToDo = (event) =>{
    event.preventDefault();
    if(input==="")
    {
      alert("Please Enter ToDo!");
      return;
    }
    setItems( (prevItems) =>{return [...prevItems, input]});
    setInput("");
  };

  const ToDoDelete = (id) => {
    setItems((prevItems) =>{return prevItems.filter((element,index) => index!==id)});
  
  };

  const Heading = () =>{
    return(
        <div className="todo-heading">
        <img src="icontodo.png" alt="Logo"/>
        <h1>ToDoistic : Create Your Own ToDo's!</h1>
        </div>
    );
  };
   const ToDoCard = (props) =>{
    return(
        <div className="todo-card">
            <p>{props.todo} 
            </p>
            <button onClick={() => props.onDelete(props.id)}>X</button>
        </div>
    );
  };

  return (
    <>
      <div className="main">
        <div className="todo-container">
          <Heading/>
          <div className="todo-create">
          <form>
            <input type="text" required placeholder="Add Your ToDo..." value={input} onChange={InputData}/>
            <button type="submit" onClick={AddToDo}>+</button>
          </form>
        </div>
          <div className="todo-list">
          {items.map( (itemValue, index) => {
            return <ToDoCard key={index} id={index} todo={itemValue} onDelete={ToDoDelete}/>})}      
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

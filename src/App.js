import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {useRef} from 'react'

export default function App() {
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //   let todos = localStorage.getItem("todos")
  //     ? JSON.parse(localStorage.getItem("todos"))
  //     : [];
  //     setData(todos);
  //     // alert(todos.filter((d)=>{d.status!=="done"}).length);
  //     const tt = todos.filter((d)=>d.status!=="done").length;
  // },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  
  const [Viet,setViet]=useState(false);

  const [todo, setTodo] = useState({
    name: "",
    status: "",
    id:"",
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!todo.name) {
      alert("Please fill task");
      return;
    }
   
    
    let todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  
    todos = [...todos,todo];
  
    localStorage.setItem("todos", JSON.stringify(todos));
    window.location.reload () ;
  }
  const handleChange = (e) => {
    setTodo({...todo,name:e.target.value});
  }
  let btn="";
  {Viet?btn="Đổi ngôn ngữ":btn="Change language"}

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader lan={Viet}/>
        <button onClick={()=>setViet(!Viet)}>{btn}</button>
        <TodoList />
        <Form submit={handleSubmit} change={handleChange} lan={Viet}/>
      </div>
      <Footer lan={Viet}/>
    </div>
  );
};
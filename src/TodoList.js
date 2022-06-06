import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useEffect,useState } from "react";

const TodoList = () => {

    const todoss=localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    const [todorender,setTodorender] = useState(todoss);

    const handleDone =(index)=>{
        const arr=todoss;
        arr[index].status="done";
         setTodorender(arr);
         localStorage.setItem("todos", JSON.stringify(todorender));
         window.location.reload () ;
        }
        const renderdone=()=>{
            setTodorender(todoss.filter((d)=>d.status=="done"));
        }
        const renderall=()=>{
            setTodorender(todoss);
        }
        const Down =(index)=>{
            
            const brr=todoss;
            const item ={...brr[index-1]};
            brr[index-1]={...brr[index]};
            brr[index]= {...item};
            setTodorender(brr);
            localStorage.setItem("todos", JSON.stringify(todorender));
         window.location.reload () ;
         
        }
        const Up =(index)=>{
            const brr=todoss;
            const item ={...brr[index+1]};
            brr[index+1]={...brr[index]};
            brr[index]= {...item};
            setTodorender(brr);
            localStorage.setItem("todos", JSON.stringify(todorender));
         window.location.reload () ;
        }


  return (
      
    <div className="todo-list-container">
        <button onClick={renderdone}>Done</button>
        <button onClick={renderall}>All</button>

      {todorender.map((a,index)=>(
          <div>
         {a.status=="done"? 
         <div className={`todo-item-container ${a.status}` } key={index} >
            <FaRegCheckCircle color="#9a9a9a" className="item-done-button" onClick={() => handleDone(index)}/>
            <div className="item-title">{a.name}</div>
            <button onClick={() => Up(index)}>Up</button>
            <button onClick={() => Down(index)}>Down</button>
         </div>: 
         <div className={`todo-item-container ${a.status}` } key={index}>
            <FaRegCircle className="item-done-button" color="#9a9a9a" onClick={() => handleDone(index)} />
            <div className="item-title">{a.name}</div>
            <button onClick={() => Up(index)}>Up</button>
            <button onClick={() => Down(index)}>Down</button>
          </div>
          }
         </div>
          
          ))}

     
    </div>
  );
};

export default TodoList;

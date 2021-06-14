import React from 'react'

export default function Form({setStatus,inputText,setInputText,todos,setTodos}) {

    const inputTexthandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodeHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,{ text: inputText ,completed:false,id:Math.random()}]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
       <form>
           
           <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" />
           <button onClick={submitTodeHandler} className="todo-button" type="submit">
               <i className="fas fa-plus-square"></i>
           </button>

           <div className="select">
               <select onChange={statusHandler} name="todos" className="filter-todo">
                   <option value="all">All</option>
                   <option value="completed">Completed</option>
                   <option value="uncompleted">Uncompleted</option>
               </select>
           </div>
       </form>

      
       
    );
}


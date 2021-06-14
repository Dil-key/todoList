import React from 'react';
import Tod from './Tod';

export default function Todo({todos,setTodos,filteredTodos}) {
    console.log(filteredTodos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
              {filteredTodos.map((todo) => (
                <Tod setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} />
              ))}

            </ul>
            
        </div>
    )
}


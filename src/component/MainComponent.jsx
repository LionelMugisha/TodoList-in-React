import React from "react";
import TodoForm from "./TodoForm";

function Main({todos,handleBntClick}){ 

    return (
      <>
        <ul>
            {todos.map((todo, index) => (
            <TodoForm
                key={index}
                todo={todo}
                remove={() => handleBntClick({ type: "remove", index })}
                completed={() => handleBntClick({ type: "completed", index })}
            />
            ))}
        </ul>
      </>
    );
  }

  export default Main;
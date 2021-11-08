import React from "react";

const TodoForm = (props) => {
  const { name,period,done } = props.todo;

    return (
      <div className="flex flex-col p-2 bg-gray-100 mt-2 shadow-sm rounded-md max-w-xl mx-auto" style={{ backgroundColor : done ? "skyblue" : "" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center ml-2">
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">{name}</div>
              <p className="text-sm text-gray-600 leading-none mt-2">{period}</p>
            </div>
          </div>
          <div className="mr-5">
            {!done ? <button onClick={props.completed} className="mr-5"><i className="fa fa-check"></i></button> : ""}
            <button onClick={props.remove}><i className="fa fa-ban"></i></button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TodoForm;
  
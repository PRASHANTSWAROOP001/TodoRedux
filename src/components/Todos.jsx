import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";
function Todos() {
  const [editID, setEditId] = useState(null);
  const [upDateText, setUpdateText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setUpdateText(todo.text);
  };

  const handleUpdate = (id) => {
    dispatch(
      updateTodo({
        id,
        text: upDateText,
      })
    );

    setUpdateText("");
    setEditId(null);
  };

  const enterSave = (e, id) => {
    console.log(e.key);
    if (e.key === "Enter") {
      console.log(e.key);
      handleUpdate(id);
    }
  };


  return (
    <>
      <div>
        <h1 className=" text-xl text-green-400 my-2 ">Todo</h1>
      </div>
      {todos.map((todo) => (
        <li key={todo.id} className=" list-none py-2">
          {editID === todo.id ? (
            <>
              <input
                type="text"
                value={upDateText}
                onChange={(e) => setUpdateText(e.target.value)}
                onKeyDown={(e) => enterSave(e, todo.id)}
                className="px-1 border-green-400 border-2 active:border-0"
              />
              <button
                className="text-green-400 px-2 border-2 mx-1 hover:bg-gray-500"
                onClick={(e) => handleUpdate(todo.id)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              {todo.text}
              <button className=" px-2 " onClick={() => handleEdit(todo)}>
                Edit
              </button>
              <button
                className=" px-2 text-red-300"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
            </>
          )}
        </li>
      ))}
    </>
  );
}

export default Todos;

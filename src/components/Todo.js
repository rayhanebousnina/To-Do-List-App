import React, { useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, removeToDo } from "../actions/indexx";

const ToDo = (props) => {
  const [inputData, setInputData] = useState([""]);
  const dispatch = useDispatch();
  const listT = useSelector((state) => state.todoReducers.list);
  console.log(listT);
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input
          placeholder="Enter your task"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(addToDo(inputData), setInputData(""));
          }}
        >
          Add
        </button>
      </div>
      <div>
        {listT.map((el) => {
          return (
            <div key={el.id}>
              <h3>{el.data}</h3>
              <button
                title="delete item"
                onClick={() => {
                  dispatch(deleteToDo(el.id));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
          <button onClick={() => {dispatch(removeToDo())}}>Remove all</button>
      </div>
    </div>
  );
};

export default ToDo;

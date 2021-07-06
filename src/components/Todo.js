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
    <div className="container">
      <h1>All Tasks</h1>
      <div>
        <input
          className="input-style"
          placeholder="Enter your task"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        ></input>
        <button
          className="add-button"
          onClick={() => {
            dispatch(addToDo(inputData), setInputData(""));
          }}
        >
          <i class="fas fa-plus fa-2x"></i>
        </button>
      </div>
      <div>
        {listT.map((el) => {
          return (
            <div key={el.id} className="task">
              <h3 className="title">{el.data}</h3>
              <button
                className="add-button"
                title="delete item"
                onClick={() => {
                  dispatch(deleteToDo(el.id));
                }}
              >
                <i class="fas fa-trash fa-2x"></i>
              </button>
            </div>
          );
        })}
      </div>
      <div>
          <button className="btn" onClick={() => {dispatch(removeToDo())}}>Remove all</button>
      </div>
    </div>
  );
};

export default ToDo;

import React, { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  setQueryData,
} from "react-query";

import { getTodosData, postTodo } from "../api/FetchApi";
import axios from "axios";

import TodosListItem from "./TodosListItem";

function TodosList() {
  const [val, setVal] = useState("");
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery("todos", getTodosData);

  const mutation = useMutation((newTodo) => {
    return fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setVal("");
        console.log(json);
      });
  });

  return (
    <div>
      {isLoading && <span>loading...</span>}
      {isError && <span>some error an occurred!</span>}

      {mutation.isSuccess ? <div>Todo added!</div> : null}

      <div>
        <input
          className="input-todo"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          className="btn-todo"
          onClick={() => {
            mutation.mutate({
              userId: 1,
              id: Date.now(),
              title: val,
              completed: false,
            });
          }}
        >
          Add Todo
        </button>
      </div>

      {data?.data?.map((item) => (
        <TodosListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodosList;

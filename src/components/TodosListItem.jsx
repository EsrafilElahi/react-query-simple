import React from "react";

function TodosListItem({ item }) {
  return (
    <div className="todo-item">
      <span>
        {" "}
        <strong>Title :</strong> {item.title}{" "}
      </span>
      <span>
        {" "}
        <strong>Completed :</strong> {item.completed ? "Done" : "False"}{" "}
      </span>
    </div>
  );
}

export default TodosListItem;

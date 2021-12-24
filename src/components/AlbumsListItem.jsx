import React from "react";

function AlbumsListItem({ item }) {
  return (
    <div className="album-item">
      <span>
        {" "}
        <strong>ID :</strong> {item.id}{" "}
      </span>
      <span>
        {" "}
        <strong>Title :</strong> {item.title}{" "}
      </span>
    </div>
  );
}

export default AlbumsListItem;

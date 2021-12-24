import React from "react";

function UsersListItem({ item }) {
  return (
    <div className="user-item">
      <span>
        <strong>name :</strong> {item.name}
      </span>
      <span>
        <strong>phone :</strong> {item.phone}
      </span>
      <span>
        <strong>email :</strong> {item.email}
      </span>
    </div>
  );
}

export default UsersListItem;

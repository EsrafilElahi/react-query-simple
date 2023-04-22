import React from "react";
import { useQuery } from "react-query";
import { getUsersData } from "../service/FetchApi";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const { data, isLoading, isError } = useQuery("users", getUsersData);

  return (
    <div className="users">
      {isLoading && <span>loading...</span>}
      {isError && <span>some error an occurred</span>}
      {data?.data?.map((item) => (
        <UsersListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default UsersList;

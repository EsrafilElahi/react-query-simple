import React, { useState } from "react";
import { useQuery } from "react-query";
import { getAlbumsData } from "../service/FetchApi";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList() {
  const { data, error, loading } = useQuery("albums", getAlbumsData);

  console.log(data);

  return (
    <div className="albums">
      {loading && <span>loading...</span>}
      {error && <span>some error an occurred!</span>}
      {data?.data?.map((item) => (
        <AlbumsListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AlbumsList;

import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPhotosData } from "../api/FetchApi";
import PhotosListItem from "./PhotosListItem";

function PhotosList({ photoID }) {
  const [imgId, setImgID] = useState(1);

  const { data, status } = useQuery(["photos", (photoID = imgId)], () =>
    getPhotosData(photoID)
  );

  console.log("data :", data);

  return (
    <div>
      {status === "loading" && <span>loading...</span>}
      {status === "error" && <span>some error an occurred!</span>}
      {status === "success" && (
        <PhotosListItem data={data.data} imgId={imgId} setImgID={setImgID} />
      )}
    </div>
  );
}

export default PhotosList;

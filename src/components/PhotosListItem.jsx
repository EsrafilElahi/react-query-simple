import React from "react";

function PhotosListItem({ data, imgId, setImgID }) {
  return (
    <div className="photo-item">
      <h3>{data.title}</h3>
      <div className="input-label">
        <label htmlFor="input">Type Number :</label>
        <input
          id="input"
          name="input"
          value={imgId}
          onChange={(e) => setImgID(e.target.value)}
        />
      </div>
      <img src={data.url} alt={data.title} />
    </div>
  );
}

export default PhotosListItem;

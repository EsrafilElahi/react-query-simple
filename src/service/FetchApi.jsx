import axios from "axios";

export const getUsersData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res;
};

export const getPostsData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res;
};

export const getPhotosData = async (photoID) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${photoID}/`
  );
  return res;
};

export const getAlbumsData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
  return res;
};

export const getTodosData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return res;
};

export const postTodo = async (newTodo) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    newTodo,
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  return res;
};

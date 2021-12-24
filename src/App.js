import React, { useState } from "react";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import PhotosList from "./components/PhotosList";
import AlbumsList from "./components/AlbumsList";
import TodosList from "./components/TodosList";

import "./App.css";

function App() {
  const [routes, setRoutes] = useState({
    users: true,
    posts: false,
    photos: false,
    albums: false,
    todos: false,
  });

  return (
    <div>
      <div className="links">
        <span
          onClick={(e) =>
            setRoutes({
              users: true,
              posts: false,
              photos: false,
              albums: false,
              todos: false,
            })
          }
        >
          Users
        </span>
        <span
          onClick={(e) =>
            setRoutes({
              users: false,
              posts: true,
              photos: false,
              albums: false,
              todos: false,
            })
          }
        >
          Posts
        </span>
        <span
          onClick={(e) =>
            setRoutes({
              users: false,
              posts: false,
              photos: true,
              albums: false,
              todos: false,
            })
          }
        >
          photos
        </span>
        <span
          onClick={(e) =>
            setRoutes({
              users: false,
              posts: false,
              photos: false,
              albums: true,
              todos: false,
            })
          }
        >
          Albums
        </span>
        <span
          onClick={(e) =>
            setRoutes({
              users: false,
              posts: false,
              photos: false,
              albums: false,
              todos: true,
            })
          }
        >
          Todos
        </span>
      </div>
      <div className="content">
        {routes.users ? (
          <UsersList />
        ) : routes.posts ? (
          <PostsList />
        ) : routes.photos ? (
          <PhotosList />
        ) : routes.albums ? (
          <AlbumsList />
        ) : (
          <TodosList />
        )}
      </div>
    </div>
  );
}

export default App;

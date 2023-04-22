import React, { useState, Suspense, lazy } from "react";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import PhotosList from "./components/PhotosList";
import AlbumsList from "./components/AlbumsList";
import TodosList from "./components/TodosList";

import "./App.css";

function App() {

  const [activeRoute, setActiveRoute] = useState("USERS");


  return (
    <div>

      <div className="links">
        <span
          onClick={(e) =>
            setActiveRoute("USERS")
          }
        >
          Users
        </span>
        <span
          onClick={(e) =>
            setActiveRoute("POSTS")
          }
        >
          Posts
        </span>
        <span
          onClick={(e) =>
            setActiveRoute("PHOTOS")
          }
        >
          photos
        </span>
        <span
          onClick={(e) =>
            setActiveRoute("ALBUMS")
          }
        >
          Albums
        </span>
        <span
          onClick={(e) =>
            setActiveRoute("TODOS")
          }
        >
          Todos
        </span>
      </div>

      <div className="content">
        {activeRoute === "USERS" ? (
          <UsersList />
        ) : activeRoute === "POSTS" ? (
          <PostsList />
        ) : activeRoute === "PHOTOS" ? (
          <PhotosList />
        ) : activeRoute === "ALBUMS" ? (
          <AlbumsList />
        ) : (
          <TodosList />
        )}

        {/* <ChosenComponent /> */}

      </div>
    </div>
  );
}

export default App;

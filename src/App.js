import React, { useState, Suspense, lazy } from "react";
// import UsersList from "./components/UsersList";
// import PostsList from "./components/PostsList";
// import PhotosList from "./components/PhotosList";
// import AlbumsList from "./components/AlbumsList";
// import TodosList from "./components/TodosList";

import "./App.css";

function App() {

  const [activeRoute, setActiveRoute] = useState("USERS");

  const dynamicComponents = {
    USERS: lazy(() => import("./components/UsersList")),
    PHOTOS: lazy(() => import("./components/PhotosList")),
    POSTS: lazy(() => import("./components/PostsList")),
    ALBUMS: lazy(() => import("./components/AlbumsList")),
    TODOS: lazy(() => import("./components/TodosList"))
  }


  const ChosenComponent = dynamicComponents[activeRoute]



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
        {/* {routes.users ? (
          <UsersList />
        ) : routes.posts ? (
          <PostsList />
        ) : routes.photos ? (
          <PhotosList />
        ) : routes.albums ? (
          <AlbumsList />
        ) : (
          <TodosList />
        )} */}

        <ChosenComponent />

      </div>
    </div>
  );
}

export default App;

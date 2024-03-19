import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Explore from './pages/explore';
import Bookmarks from './pages/bookmarks';
import Message from './pages/message';
import Notification from './pages/notification';
import Profile from './pages/profile';
import More from './pages/more';
import Lists from './pages/lists';

import ContextProvider from "./components/provider-context/provider.jsx";

const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />
      },
      {
        path: "/message",
        element: <Message />
      },
      {
        path: "/notification",
        element: <Notification />
      },
      {
        path: "/profile",
        element: <Profile />
      },

      {
        path: "/more",
        element: <More />
      },
      {
        path: "/lists",
        element: <Lists />
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>
  
);
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

//APPS
import App from './App.jsx'
import TenantSignup from './pages/TSF.jsx'
import PropertyOwnersSignup from './pages/POSF.jsx'
import Login from './pages/Login.jsx'
import './index.css'
import ErrorPage from './pages/Error.jsx';
import Home from './pages/Home.jsx'
import PrivateRoute from './utils/PrivateRoute.jsx';
import PropertyRoute from './utils/PropertyRoute.jsx';
import Like from './pages/Likes.jsx';
import FaqPage from './pages/Faq.jsx';
import Profile from './pages/Profile.jsx';
import Properties from './pages/Properties.jsx';
import Inbox from './pages/Inbox.jsx';
import Chat from './pages/ChatArea.jsx';
import PropertyDetail from './pages/PropertyDetail.jsx';
import SavedRoute from './utils/SavedRoute.jsx';
import About from './pages/About.jsx';
import Users from './pages/Users.jsx';
import AdminRoute from './utils/AdminRoute.jsx';
import AddProperty from './pages/AddProperty.jsx';
//


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
    
  },
  {
    path: "/signup/tenants",
    element: <TenantSignup/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/signup/property-owners",
    element: <PropertyOwnersSignup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: <PrivateRoute><Home/></PrivateRoute>
  },
  {
    path: "/inbox/:id",
    element: <PrivateRoute><Inbox/></PrivateRoute>
  },
  {
    path: "/chat/user/:sender",
    element: <PrivateRoute><Chat/></PrivateRoute>
  },
  {
    path: "/saved",
    element: <PrivateRoute><SavedRoute><Like/></SavedRoute></PrivateRoute>
  },
  {
    path: "/faqs",
    element: <PrivateRoute><FaqPage/></PrivateRoute>
  },
  {
    path: "/about-dwell",
    element: <PrivateRoute><About/></PrivateRoute>
  },
  {
    path: '/profile/:username',
    element: <PrivateRoute><Profile/></PrivateRoute>
  },
  {
    path: "/properties/view-more/:propertyId",
    element: <PrivateRoute><PropertyDetail/></PrivateRoute>
  },
  {
    path: "/properties",
    element: <PrivateRoute><PropertyRoute><Properties/></PropertyRoute></PrivateRoute>
  },
  {
    path: "/new-property",
    element: <PrivateRoute><PropertyRoute><AddProperty/></PropertyRoute></PrivateRoute>
  },
  {
    path: "/users",
    element: <PrivateRoute><AdminRoute><Users/></AdminRoute></PrivateRoute>
  },
  {
    path: "*",
    element: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
);

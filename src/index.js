import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


import './styles/index.css';
import Home from "./pages/Home";
import FormCard from "./pages/Form";
import Orders from "./pages/Orders";
import Details from './pages/Details';

/* using react router dom to navigation */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/form",
    element: <FormCard/>
  },
  {
    path: "/pedidos",
    element: <Orders/>
  },
  {
    path: '/detalhes',
    element: <Details/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>
);


/*  */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// Add jquery bootstrap and fontawesome
// import 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'

// Copy used files from startbootstrap and remove folder startbootstrap or used files
import './startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.css';
import './startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.min.css';
import './startbootstrap-sb-admin-2-gh-pages/vendor/fontawesome-free/css/all.min.css';

import './styles/index.css';
import Home from "./pages/Home";
import FormCard from "./pages/Form";
import Orders from "./pages/Orders";
import Details from './pages/Details';
import StoreLogin from './pages/StoreLogin';
import ForgotPassword from './pages/forgotPassword';
import Cadastrar from './pages/Cadastrar';
import StoreHome from './pages/StoreHome'

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
  {
    path: '/StoreLogin',
    element: <StoreLogin/>
  },
  {
    path: '/ForgotPassword',
    element: <ForgotPassword/>
  },
  {
    path: '/Cadastrar',
    element: <Cadastrar/>
  },
  {
    path: '/StoreHome',
    element: <StoreHome/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>
);


/*  */
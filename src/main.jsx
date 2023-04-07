import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import First from './Components/First/First';
import MealDetails from './Components/MealDtails/MealDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children : [
      {
        path : '/',
        element : <First />
      },
      {
        path : 'contact',
        element : <Contact></Contact>,
      },
      {
        path : 'services',
        element : <Services></Services>,
        loader : () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'),
      },
      {
        path : 'service/:serviceId',
        element : <MealDetails></MealDetails>,
        loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.serviceId}`)
      },
      {
        path : '*',
        element : <ErrorPage></ErrorPage>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

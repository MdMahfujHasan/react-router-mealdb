/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Meals from './components/Meals/Meals';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import Welcome from './components/Welcome/Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Welcome></Welcome>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "meals",
        element: <Meals></Meals>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      },
      {
        path: "meal/:mealId",
        element: <MealDetail></MealDetail>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

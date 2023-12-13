import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Budget from "./components/Budget.jsx";
import StockTracker from "./components/StockTracker.jsx";
import AboutUs from "./components/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Budget/>
      },
      {
        path: '/tracker',
        element: <StockTracker />
      },
      {
        path: '/about',
        element: <AboutUs />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
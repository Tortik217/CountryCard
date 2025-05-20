import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Root from "./routes/root";
import React from "react";
import City from "./routes/components/City/City";
import CountryPanel from "./routes/components/CountryPanel/CountryPanel";
import CountryPage from "./routes/components/Country/CountryPage";

import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <CountryPanel /> },
      { path: "city/:id", element: <City /> },
      { path: "country/:id", element: <CountryPage /> }
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

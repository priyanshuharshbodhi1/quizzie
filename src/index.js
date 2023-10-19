import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './screens/register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  // {
  //   path: "/signup",
  //   element: <SignUp />,
  // },
  // {
  //   path: "/jobfinder",
  //   element: <JobFinder />,
  // },
  // {
  //   path: "/addjob",
  //   element: <AddJob />,
  // },
  // {
  //   path: "/viewjob/:jobId",
  //   element: <ViewJob />,
  // },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
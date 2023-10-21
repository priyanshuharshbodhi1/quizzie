import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./screens/register/Register";
import Dashboard from "./screens/dashboard/Dashboard";
import PollCompletion from "./screens/pollCompletion/PollCompletion";
import QuizCompletion from "./screens/quizCompletion/QuizCompletion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/pollsucess",
    element: <PollCompletion />,
  },
  {
    path: "/quizsucess",
    element: <QuizCompletion />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

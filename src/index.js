import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./screens/register/Register";
import Dashboard from "./screens/dashboard/Dashboard";
import PollCompletion from "./screens/pollCompletion/PollCompletion";
import QuizCompletion from "./screens/quizCompletion/QuizCompletion";
import Questions from "./screens/questions/Questions";
import ItemNotFound  from "./screens/itemNotFound/ItemNotFound";

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
    path: "/pollcompleted",
    element: <PollCompletion />,
  },
  {
    path: "/quizcompleted",
    element: <QuizCompletion />,
  },
  {
    path: "/quiz/:quizId",
    element: <Questions />,
  },
  {
    path: "/item-not-found",
    element: <ItemNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

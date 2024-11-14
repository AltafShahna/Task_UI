import React, { lazy } from "react";

// import { Navigate } from "react-router-dom";

// Lazy load the components
const Login = lazy(() => import("./login"));
const TaskManagement = lazy(() => import("./TaskManagement"));

// Check if the user is authenticated
// const isAuthenticated = () => {
//   return localStorage.getItem("token") !== null;
// };

const allRoutes = [
  {
    name: "Login",
    key: "Login",
    route: "/Login",
    component: <Login />,
  },
  {
    name: "TaskManagement",
    key: "TaskManagement",
    route: "/TaskManagement",
    component: <TaskManagement />,
  },
];

export default allRoutes;

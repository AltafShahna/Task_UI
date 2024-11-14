import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "./NavBar";
import allRoutes from "./Routes";

// Define a dynamic route configuration

const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return (
        <Route
          exact
          path={route.route}
          element={route.component}
          key={route.key}
        />
      );
    }

    return null;
  });

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          {getRoutes(allRoutes)}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;

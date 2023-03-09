import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard"));
const Grants = React.lazy(() => import("./views/grants"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/grants", name: "Grants", element: Grants },
];

export default routes;

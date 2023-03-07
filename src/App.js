import React, { Suspense } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));

import "./scss/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

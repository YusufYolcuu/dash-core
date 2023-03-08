import React, { Suspense } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/register/Register"));

import "./scss/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" name="Home" element={<DashboardLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

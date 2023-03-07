import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

// import "./scss/style.scss";

const Login = React.lazy(() => import("./views/pages/login/Login"));
// const Register = React.lazy(() => import("./views/pages/register/Register"));

function App() {
  return (
    <HashRouter>
      {
        <Suspense>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      }
    </HashRouter>
  );
}

export default App;

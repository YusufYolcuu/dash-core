import React, { Suspense } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

const HomeLayout = React.lazy(() => import("./layout/HomeLayout"));
const Login = React.lazy(() => import("./views/pages/login/Login"));

import "./scss/style.scss";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

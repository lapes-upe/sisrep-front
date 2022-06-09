import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import HeaderPrimary from "./layouts/HeaderPrimary/HeaderPrimary";
import HeaderSecond from "./layouts/HeaderSecond/HeaderSecond";
import { StaticRoutes } from "./business/useSisrepRoutes";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <HeaderPrimary />
      <HeaderSecond />
      <Routes>
        {Object.values(StaticRoutes).map((route) => {
          return <Route path={route.path} element={route.component} />;
        })}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

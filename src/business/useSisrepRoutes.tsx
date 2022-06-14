import { ComponentType } from "react";

import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";

type ISisrepRoute = {
  label: string;
  path: string;
  component: JSX.Element;
};

type ISisrepRoutes = {
  [key: string]: ISisrepRoute;
};

export const StaticRoutes: ISisrepRoutes = {
  Sisrep: {
    label: "SISREP",
    path: "/",
    component: <Home/>,
  },
  Contact: {
    label: "CONTATO",
    path: "/contato",
    component: <Contact/>,
  },
  About: {
    label: "SOBRE",
    path: "/sobre",
    component: <About/>,
  },
  Login: {
    label: "LOGIN",
    path: "/login",
    component: <Login/>,
  },
  Profile: {
    label: "PERFIS",
    path: "/perfis",
    component: <Profile/>,
  },
};

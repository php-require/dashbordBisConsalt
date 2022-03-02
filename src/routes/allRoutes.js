import React from "react"
import { Redirect } from "react-router-dom"

//Dashboard
import Dashboard from "../pages/Dashboard/index";

// Authentication related pages
import userProfile from "../pages/Authentication/user-profile"
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//BUH
import Buh from "../pages/Buh";
//Biz
import Bis from "../pages/Bis";
//Forms
import FormUpload from "../pages/Forms/FormUpload";

const userRoutes = [

  //dashboard
  { path: "/dashboard", component: Dashboard },

  //profile
  { path: "/profile", component: userProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  
  //Buhservis
  { path: "/buh", component: Buh },
  
  //bisConsalt
  { path: "/bis", component: Bis },
  
  //Forms
  { path: "/uploads", component: FormUpload },
]

const authRoutes = [
  //authencation page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
 
]

export { userRoutes, authRoutes }

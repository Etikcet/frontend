import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUp";
import Checkout from "../pages/Checkout";
import SignIn from "../pages/SignIn"
import BusRoutes  from "../pages/BusRoutes";
import AddRoutes  from "../pages/AddRoutes";
import AddSchedules  from "../pages/AddSchedules";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/busroutes" element={<BusRoutes />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addroutes" element={<AddRoutes />} />
          <Route path="/addschedules" element={<AddSchedules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

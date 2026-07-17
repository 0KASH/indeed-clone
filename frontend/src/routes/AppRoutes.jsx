import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={
     <ProtectedRoute>
      <Dashboard />
     </ProtectedRoute>
  }
/>

      </Routes>

      <Footer />

    </BrowserRouter>
  );

};


export default AppRoutes;
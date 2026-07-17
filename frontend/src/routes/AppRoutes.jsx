import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProtectedRoute from "./ProtectedRoute";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";

const AppRoutes = () => {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />}/>

     </Routes>

      <Footer />

    </BrowserRouter>
  );

};


export default AppRoutes;
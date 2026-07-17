import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobseekerDashboard from "../pages/dashboard/JobseekerDashboard";
import EmployerDashboard from "../pages/dashboard/EmployerDashboard";
import ProtectedRoute from "./ProtectedRoute";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import CreateJob from "../pages/dashboard/CreateJob";
import JobApplicants from "../pages/dashboard/JobApplicants";
import Dashboard from "../pages/Dashboard";

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

        <Route path="/dashboard/jobseeker" element={
    <ProtectedRoute>
      <JobseekerDashboard />
    </ProtectedRoute>
  }
/>


<Route path="/dashboard/employer" element={
    <ProtectedRoute>
      <EmployerDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/create-job" element={
    <ProtectedRoute>
      <CreateJob />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/job/:jobId/applicants"element={
    <ProtectedRoute>
      <JobApplicants />
    </ProtectedRoute>
  }
/>


<Route
 path="/dashboard"
 element={
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
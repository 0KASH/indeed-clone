import { Navigate } from "react-router-dom";


const Dashboard = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  if (!user) {

    return <Navigate to="/login" />;

  }


  if (user.role === "employer") {

    return <Navigate to="/dashboard/employer" />;

  }


  return <Navigate to="/dashboard/jobseeker" />;

};


export default Dashboard;
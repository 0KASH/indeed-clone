import { useEffect, useState } from "react";
import API from "../../api/axios";
import { Link } from "react-router-dom";


const EmployerDashboard = () => {

  const [data, setData] = useState(null);
  const [jobs, setJobs] = useState([]);


  const getDashboard = async () => {

    try {

      const res = await API.get("/dashboard/employer");

      setData(res.data);

    } catch (error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };



  const getMyJobs = async () => {

    try {

      const res = await API.get("/jobs/my");

      setJobs(res.data);

    } catch (error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };



  const deleteJob = async (id) => {

    try {

      await API.delete(`/jobs/${id}`);

      alert("Job Deleted");

      getMyJobs();

      getDashboard();


    } catch(error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };



  useEffect(() => {

    getDashboard();
    getMyJobs();

  }, []);



  if (!data) {

    return <h2>Loading...</h2>;

  }



  return (

    <div className="dashboard">


      <h1>
        Employer Dashboard
      </h1>



      <Link to="/dashboard/create-job">

        <button className="create-btn">
          Create New Job
        </button>

      </Link>



      <div className="stats">


        <div className="stat-card">

          <h3>
            Total Jobs
          </h3>

          <h2>
            {data.totalJobs}
          </h2>

        </div>



        <div className="stat-card">

          <h3>
            Total Applications
          </h3>

          <h2>
            {data.totalApplications}
          </h2>

        </div>



        <div className="stat-card">

          <h3>
            Pending Applications
          </h3>

          <h2>
            {data.pendingApplications}
          </h2>

        </div>


      </div>



      <hr />


      <h2>
        My Posted Jobs
      </h2>



      {

        jobs.length > 0 ? (

          jobs.map((job)=>(


            <div
              className="dashboard-job-card"
              key={job._id}
            >


              <h3>
                {job.title}
              </h3>


              <p>
                Company: {job.company}
              </p>


              <p>
                Location: {job.location}
              </p>



              <div>


                <Link
                  to={`/dashboard/job/${job._id}/applicants`}
                >

                  <button className="view-btn">
                    View Applicants
                  </button>


                </Link>



                <button
                  className="delete-btn"
                  onClick={() => deleteJob(job._id)}
                >

                  Delete

                </button>


              </div>



            </div>


          ))

        ) : (


          <p>
            No Jobs Found
          </p>


        )

      }



    </div>

  );

};


export default EmployerDashboard;
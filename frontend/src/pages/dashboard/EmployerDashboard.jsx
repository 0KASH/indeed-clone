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


 } catch(error){

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

    <div>

      <h1>
        Employer Dashboard
      </h1>

      <Link to="/dashboard/create-job">
      <button> Create New Job</button>
     </Link>


      <h3>
        Total Jobs: {data.totalJobs}
      </h3>


      <h3>
        Total Applications: {data.totalApplications}
      </h3>


      <h3>
        Pending Applications: {data.pendingApplications}
      </h3>



      <hr />


      <h2>
        My Posted Jobs
      </h2>


      {
        jobs.length > 0 ? (

          jobs.map((job)=>(

            <div key={job._id}>

              <h3>
                {job.title}
              </h3>


              <p>
                {job.company}
              </p>


              <p>
                {job.location}
              </p>

              <button onClick={() => deleteJob(job._id)}>Delete</button>


            </div>

          ))

        ) : (

          <p>
            No Jobs Found
          </p>

        )

      }

      <div>
  <Link to={`/dashboard/job/${job._id}/applicants`}>
    <button>View Applicants</button>
  </Link>

  <button onClick={() => deleteJob(job._id)}> Delete  </button>
   </div>


    </div>

  );

};


export default EmployerDashboard;
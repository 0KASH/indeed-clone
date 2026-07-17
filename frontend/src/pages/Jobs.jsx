import { useEffect, useState } from "react";
import API from "../api/axios";
import JobCard from "../components/JobCard";


const Jobs = () => {

  const [jobs, setJobs] = useState([]);


  const getJobs = async () => {

    try {

      const res = await API.get("/jobs");

      setJobs(res.data.jobs);

    } catch (error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };


  useEffect(() => {

    getJobs();

  }, []);


  return (

    <div>

      <h1>
        All Jobs
      </h1>


      <div className="jobs-container">

        {
          jobs.length > 0 ? (

            jobs.map((job)=>(

              <JobCard
                key={job._id}
                job={job}
              />

            ))

          ) : (

            <p>
              No Jobs Found
            </p>

          )
        }

      </div>


    </div>

  );

};


export default Jobs;
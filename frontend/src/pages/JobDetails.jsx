import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";


const JobDetails = () => {

  const { id } = useParams();

  const [job, setJob] = useState(null);



  const getJob = async () => {

    try {

      const res = await API.get(`/jobs/${id}`);

      setJob(res.data);


    } catch (error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };



  const applyJob = async () => {

    try {

      const res = await API.post(
        "/applications",
        {
          jobId: id
        }
      );


      console.log(res.data);


      alert("Application Submitted");


    } catch (error) {


      console.log(
        error.response?.data || error.message
      );


    }

  };



  useEffect(() => {

    getJob();

  }, []);



  if (!job) {

    return <h2>Loading...</h2>;

  }



  return (

    <div className="job-details">


      <h1>
        {job.title}
      </h1>


      <div className="details-card">


        <h2>
          {job.company}
        </h2>


        <p>
          📍 Location: {job.location}
        </p>


        <p>
          💰 Salary: {job.salary}
        </p>


        <p>
          💼 Job Type: {job.jobType}
        </p>


        <p>
          Experience: {job.experience}
        </p>



        <hr />


        <h3>
          Description
        </h3>


        <p>
          {job.description}
        </p>



        <button
          className="apply-btn"
          onClick={applyJob}
        >

          Apply Now

        </button>


      </div>


    </div>

  );

};


export default JobDetails;
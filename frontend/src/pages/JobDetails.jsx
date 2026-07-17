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
          job: id
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

    <div>

      <h1>
        {job.title}
      </h1>


      <p>
        Company: {job.company}
      </p>


      <p>
        Location: {job.location}
      </p>


      <p>
        Salary: {job.salary}
      </p>


      <p>
        Job Type: {job.jobType}
      </p>


      <p>
        Experience: {job.experience}
      </p>


      <p>
        Description: {job.description}
      </p>



      <button onClick={applyJob}>
        Apply Now
      </button>


    </div>

  );

};


export default JobDetails;
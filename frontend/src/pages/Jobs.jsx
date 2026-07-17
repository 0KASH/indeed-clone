import { useEffect, useState } from "react";
import API from "../api/axios";
import JobCard from "../components/JobCard";


const Jobs = () => {


  const [jobs, setJobs] = useState([]);


  const [keyword, setKeyword] = useState("");

  const [location, setLocation] = useState("");

  const [jobType, setJobType] = useState("");




  const getJobs = async () => {

    try {


      const res = await API.get(

        `/jobs?keyword=${keyword}&location=${location}&jobType=${jobType}`

      );


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




      <div className="job-filter">


        <input

          type="text"

          placeholder="Search Job Title"

          value={keyword}

          onChange={(e)=>setKeyword(e.target.value)}

        />




        <input

          type="text"

          placeholder="Location"

          value={location}

          onChange={(e)=>setLocation(e.target.value)}

        />




        <select

          value={jobType}

          onChange={(e)=>setJobType(e.target.value)}

        >


          <option value="">
            All Job Types
          </option>


          <option value="Full-Time">
            Full-Time
          </option>


          <option value="Remote">
            Remote
          </option>


          <option value="Internship">
            Internship
          </option>



        </select>




        <button
          onClick={getJobs}
        >

          Search

        </button>



      </div>





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
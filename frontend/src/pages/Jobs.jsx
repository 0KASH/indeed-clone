import { useEffect, useState } from "react";
import API from "../api/axios";
import JobCard from "../components/JobCard";


const Jobs = () => {

  const [jobs, setJobs] = useState([]);

  const [keyword, setKeyword] = useState("");

  const [location, setLocation] = useState("");



  const getJobs = async () => {

    try {

      const res = await API.get(
        `/jobs?keyword=${keyword}&location=${location}`
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



  const handleSearch = () => {

    getJobs();

  };



  return (

    <div>


      <h1>
        All Jobs
      </h1>



      <input

        type="text"

        placeholder="Search job title"

        value={keyword}

        onChange={(e)=>setKeyword(e.target.value)}

      />



      <input

        type="text"

        placeholder="Location"

        value={location}

        onChange={(e)=>setLocation(e.target.value)}

      />



      <button onClick={handleSearch}>

        Search

      </button>




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

  );

};


export default Jobs;
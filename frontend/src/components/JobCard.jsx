import { Link } from "react-router-dom";


const JobCard = ({ job }) => {

  return (

    <div className="job-card">

      <h2>
        {job.title}
      </h2>

      <h4>
        {job.company}
      </h4>

      <p>
        📍 {job.location}
      </p>

      <p>
        💰 Salary: {job.salary}
      </p>

      <p>
        💼 Type: {job.jobType}
      </p>

      <p>
        Experience: {job.experience}
      </p>


      <Link to={`/jobs/${job._id}`}>

        <button className="view-btn">
          View Details
        </button>

      </Link>


    </div>

  );

};


export default JobCard;
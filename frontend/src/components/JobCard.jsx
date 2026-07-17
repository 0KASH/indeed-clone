import { Link } from "react-router-dom";
const JobCard = ({ job }) => {

  return (
    <div>

      <h3>{job.title}</h3>

      <p>
        Company: {job.company}
      </p>

      <p>
        Location: {job.location}
      </p>

      <p>
        Salary: {job.salary || "Not mentioned"}
      </p>

      <p>
        Type: {job.jobType || "Full Time"}
      </p>


      <Link to={`/jobs/${job._id}`}>
        <button>
          View Details
        </button>
      </Link>


    </div>
  );

};


export default JobCard;
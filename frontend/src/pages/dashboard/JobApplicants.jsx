import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

const JobApplicants = () => {

  const { jobId } = useParams();

  const [applications, setApplications] = useState([]);


  const getApplicants = async () => {

    try {

      const res = await API.get(`/applications/job/${jobId}`);

      setApplications(res.data);

    } catch (error) {

      console.log(error.response?.data || error.message);

    }

  };


  const updateStatus = async (id, status) => {

    try {

      await API.patch(`/applications/${id}/status`, {
        status,
      });

      getApplicants();

    } catch (error) {

      console.log(error.response?.data || error.message);

    }

  };


  useEffect(() => {

    getApplicants();

  }, []);


  return (

    <div>

      <h1>Job Applicants</h1>

      {
        applications.length > 0 ? (

          applications.map((app) => (

            <div key={app._id}>

              <h3>{app.user.name}</h3>

              <p>{app.user.email}</p>

              <p>Status: {app.status}</p>

              <button
                onClick={() =>
                  updateStatus(app._id, "Accepted")
                }
              >
                Accept
              </button>

              <button
                onClick={() =>
                  updateStatus(app._id, "Rejected")
                }
              >
                Reject
              </button>

            </div>

          ))

        ) : (

          <p>No Applicants Found</p>

        )
      }

    </div>

  );

};

export default JobApplicants;

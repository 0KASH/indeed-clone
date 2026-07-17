import { useEffect, useState } from "react";
import API from "../../api/axios";


const JobseekerDashboard = () => {

  const [applications, setApplications] = useState([]);


  const getApplications = async () => {

    try {

      const res = await API.get("/applications/my");

      setApplications(res.data);


    } catch (error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };


  useEffect(() => {

    getApplications();

  }, []);



  return (

    <div>

      <h1>
        Jobseeker Dashboard
      </h1>


      <h2>
        My Applications
      </h2>


      {
        applications.length > 0 ? (

          applications.map((app) => (

            <div key={app._id}>

              <h3>
                {app.job.title}
              </h3>


              <p>
                Company: {app.job.company}
              </p>


              <p>
                Status: {app.status}
              </p>


            </div>

          ))

        ) : (

          <p>
            No Applications Found
          </p>

        )

      }


    </div>

  );

};


export default JobseekerDashboard;
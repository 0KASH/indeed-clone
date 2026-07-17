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

    <div className="dashboard">


      <h1>
        Jobseeker Dashboard
      </h1>


      <h2>
        My Applications
      </h2>



      {

        applications.length > 0 ? (

          <div className="applications-container">


            {

              applications.map((app)=>(


                <div
                  className="application-card"
                  key={app._id}
                >


                  <h3>
                    {app.job.title}
                  </h3>


                  <p>
                    Company: {app.job.company}
                  </p>


                  <p>
                    Location: {app.job.location}
                  </p>


                  <p>
                    Salary: {app.job.salary}
                  </p>


                  <p>
                    Job Type: {app.job.jobType}
                  </p>



                  <p>
                    Status:

                    <span
                      className={
                        app.status === "Accepted"
                        ? "status accepted"
                        :
                        app.status === "Rejected"
                        ? "status rejected"
                        :
                        "status pending"
                      }
                    >

                      {app.status}

                    </span>

                  </p>



                </div>


              ))

            }


          </div>


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
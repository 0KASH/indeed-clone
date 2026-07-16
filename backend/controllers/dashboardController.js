import Job from "../models/Job.js";
import Application from "../models/Application.js";


export const getEmployerDashboard = async (req, res) => {

  try {

    const jobs = await Job.find({
      employer: req.user._id
    });


    const jobIds = jobs.map(job => job._id);


    const totalJobs = jobs.length;


    const totalApplications = await Application.countDocuments({
      job: {
        $in: jobIds
      }
    });


    const pendingApplications = await Application.countDocuments({
      job: {
        $in: jobIds
      },
      status: "Pending"
    });


    const acceptedApplications = await Application.countDocuments({
      job: {
        $in: jobIds
      },
      status: "Accepted"
    });


    const rejectedApplications = await Application.countDocuments({
      job: {
        $in: jobIds
      },
      status: "Rejected"
    });


    res.status(200).json({
      totalJobs,
      totalApplications,
      pendingApplications,
      acceptedApplications,
      rejectedApplications
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


export const getJobSeekerDashboard = async (req, res) => {

  try {

    const totalAppliedJobs = await Application.countDocuments({
      applicant: req.user._id
    });


    const pendingApplications = await Application.countDocuments({
      applicant: req.user._id,
      status: "Pending"
    });


    const acceptedApplications = await Application.countDocuments({
      applicant: req.user._id,
      status: "Accepted"
    });


    const rejectedApplications = await Application.countDocuments({
      applicant: req.user._id,
      status: "Rejected"
    });


    res.status(200).json({
      totalAppliedJobs,
      pendingApplications,
      acceptedApplications,
      rejectedApplications
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
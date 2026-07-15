import Application from "../models/Application.js";
import Job from "../models/Job.js";


export const applyJob = async (req, res) => {

  try {

    const { jobId } = req.body;


    const job = await Job.findById(jobId);


    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }


    const alreadyApplied = await Application.findOne({
      user: req.user._id,
      job: jobId
    });


    if (alreadyApplied) {
      return res.status(400).json({
        message: "Already applied for this job"
      });
    }


    const application = await Application.create({
      user: req.user._id,
      job: jobId
    });


    res.status(201).json({
      message: "Job applied successfully",
      application
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


export const getMyApplications = async (req, res) => {
  try {

    const applications = await Application.find({
      user: req.user._id
    })
      .populate("job", "title company location salary jobType")
      .populate("user", "name email");


    res.status(200).json(applications);


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


export const getJobApplicants = async (req, res) => {
  try {

    const { jobId } = req.params;


    const applications = await Application.find({
      job: jobId
    })
      .populate("user", "name email")
      .populate("job", "title company");


    res.status(200).json(applications);


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      jobType,
      experience,
      description,
    } = req.body;

    const job = await Job.create({
      title,
      company,
      location,
      salary,
      jobType,
      experience,
      description,
      employer: req.user._id,
    });

    res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getAllJobs = async (req, res) => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const keyword = req.query.keyword;
    const location = req.query.location;
    const jobType = req.query.jobType;

const search = {};

if (keyword) {
  search.title = {
    $regex: keyword,
    $options: "i",
  };
}


if (location) {
  search.location = {
    $regex: location,
    $options: "i",
  };
}

if (jobType) {
  search.jobType = {
    $regex: jobType,
    $options: "i",
  };
}
  const totalJobs = await Job.countDocuments(search);

   const jobs = await Job.find(search)
  .populate("employer", "name email")
  .skip(skip)
  .limit(limit);


res.status(200).json({
  totalJobs,
  page,
  limit,
  jobs
});


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


export const getSingleJob = async (req, res) => {
  try {

    const job = await Job.findById(req.params.id)
      .populate("employer", "name email");


    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }


    res.status(200).json(job);


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


export const updateJob = async (req, res) => {
  try {

    const job = await Job.findById(req.params.id);


    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }


    if (job.employer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not allowed to update this job"
      });
    }


    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );


    res.status(200).json({
      message: "Job updated successfully",
      job: updatedJob
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


export const deleteJob = async (req, res) => {
  try {

    const job = await Job.findById(req.params.id);


    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }


    if (job.employer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not allowed to delete this job"
      });
    }


    await Job.findByIdAndDelete(req.params.id);


    res.status(200).json({
      message: "Job deleted successfully"
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
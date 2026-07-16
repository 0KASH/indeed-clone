import express from "express";
import {
 applyJob,
 getMyApplications,
 getJobApplicants,
 updateApplicationStatus
} from "../controllers/applicationController.js";
import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";


const router = express.Router();


router.post("/", protect, allowRoles("jobseeker"), applyJob );

router.get("/my", protect, getMyApplications);

router.get("/job/:jobId", protect, getJobApplicants);

router.patch("/:id/status", protect, allowRoles("employer"), updateApplicationStatus );


export default router;
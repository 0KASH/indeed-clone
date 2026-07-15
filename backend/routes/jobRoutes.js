import express from "express";
import {
 createJob,
 getAllJobs,
 getSingleJob,
  updateJob,
   deleteJob
} from "../controllers/jobController.js";
import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";


const router = express.Router();

router.get("/", getAllJobs);

router.get("/:id", getSingleJob);

router.post( "/", protect, allowRoles("employer"), createJob);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

export default router;
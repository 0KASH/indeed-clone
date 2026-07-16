import express from "express";
import { 
  getEmployerDashboard,
  getJobSeekerDashboard
} from "../controllers/dashboardController.js";
import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";


const router = express.Router();


router.get("/employer", protect, allowRoles("employer"), getEmployerDashboard);

router.get("/jobseeker", protect, allowRoles("jobseeker"), getJobSeekerDashboard);


export default router;
import express from "express";
import { getComplaintList, updateComplaintStatus } from "../controllers/complaint.Controller.js";
import { searchEmployees } from "../controllers/complaint.assignment.controller.js";

const router = express.Router();

// Route for complaint_list.jsx to get all complaints
// GET /api/complaint_list/getComplaintList
router.get("/getComplaintList", getComplaintList);

// Route for complaint_list.jsx to assign/update/delete an assignment
// PUT /api/complaint_list/assignComplaint/:complaint_id
router.put("/assignComplaint/:complaint_id", updateComplaintStatus);

// Route for searching employees for assignment
// GET /api/complaint_list/searchEmployees?query=...&department=...
router.get("/searchEmployees", searchEmployees);

export default router;
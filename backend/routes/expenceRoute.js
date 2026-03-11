import express from 'express'
import { addExpence, deleteExpence, filterExpence, getExpence, getMonthlySummary, getTodayExpence, totalExpence, updateExpence } from '../controllers/expenceController.js';
import isAuthenticated from '../middleware/isAuthenticated.js'

const router = express.Router();

router.route("/add-expence").post(isAuthenticated,addExpence);
router.route("/get-expence").get(isAuthenticated,getExpence);
router.route("/delete-expence/:id").post(isAuthenticated,deleteExpence);
router.route("/update-expence/:id").post(isAuthenticated,updateExpence);
router.route("/total-expence").get(isAuthenticated,totalExpence);
router.route("/filter-expence").get(isAuthenticated,filterExpence);
router.route("/monthly-summary").get(isAuthenticated,getMonthlySummary);
router.route("/today-expence").get(isAuthenticated,getTodayExpence);


export default router;
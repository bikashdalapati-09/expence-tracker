import express from 'express'
import { addExpence, deleteExpence, getExpence, updateExpence } from '../controllers/expenceController.js';
import isAuthenticated from '../middleware/isAuthenticated.js'

const router = express.Router();

router.route("/add-expence").post(isAuthenticated,addExpence);
router.route("/get-expence").get(isAuthenticated,getExpence);
router.route("/delete-expence/:id").post(isAuthenticated,deleteExpence);
router.route("/update-expence/:id").post(isAuthenticated,updateExpence);

export default router;
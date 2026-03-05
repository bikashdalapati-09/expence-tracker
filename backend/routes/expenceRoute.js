import express from 'express'
import { addExpence, getExpence } from '../controllers/expenceController.js';
import isAuthenticated from '../middleware/isAuthenticated.js'

const router = express.Router();

router.route("/add-expence").post(isAuthenticated,addExpence);
router.route("/get-expence").get(isAuthenticated,getExpence);

export default router;
import { Router } from "express";
import { createTrip, saveTrip } from "../controllers/trip.controllers.js";

const router = Router()

router.route("/create-trip").post(createTrip)
router.route("/save-trip").post(saveTrip)

export default router
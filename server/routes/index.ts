import express from "express";
import { activateUser, registrationUser } from "../controllers/user.controller";

const router = express.Router();

router.post("/registration", registrationUser);
router.post("/activate-user", activateUser);

export default router;

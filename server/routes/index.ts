import express from "express";
import { validateRequest } from "../middleware/validateRequest";
import { registrationSchema, activationSchema } from "../schemas/auth.schema";
import { activateUser, registrationUser } from "../controllers/user.controller";

const router = express.Router();

router.post(
  "/registration",
  validateRequest(registrationSchema),
  registrationUser
);
router.post("/activate-user", validateRequest(activationSchema), activateUser);

export default router;

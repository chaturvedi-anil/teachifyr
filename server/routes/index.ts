import express from "express";
import { validateRequest } from "../middleware/validateRequest";
import {
  registrationSchema,
  activationSchema,
  loginSchema,
} from "../schemas/auth.schema";
import {
  activateUser,
  loginUser,
  registrationUser,
  userLogout,
} from "../controllers/user.controller";
import { isAtuhenticated } from "../middleware/auth";

const router = express.Router();

router.post(
  "/registration",
  validateRequest(registrationSchema),
  registrationUser
);
router.post("/activate-user", validateRequest(activationSchema), activateUser);
router.post("/login", validateRequest(loginSchema), loginUser);
("");
router.get("/logout", isAtuhenticated, userLogout);

export default router;

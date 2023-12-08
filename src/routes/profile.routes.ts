import { Router } from "express";
import {
  createProfile,
  getProfile,
  getUsername,
  updateProfile,
  deleteProfile,
} from "../controllers/profile.controllers";

const router = Router();

router.post("/profile", createProfile);
router.get("/profile", getProfile);
router.get("/profile/:id", getUsername);
router.put("/profile/:id", updateProfile);
router.delete("/profile/:id", deleteProfile);

export default router;

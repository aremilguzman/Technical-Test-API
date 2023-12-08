import { Router } from "express";
import {
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
} from "../controllers/client.cotrollers";

const router = Router();

router.post("/client", createClient);
router.get("/client", getClients);
router.get("/client/:id", getClient);
router.put("/client/:id", updateClient);
router.delete("/client/:id", deleteClient);

export default router;

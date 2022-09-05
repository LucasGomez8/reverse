import { Router } from "express";
import {
  createUser,
  checkLogin,
  getUsers,
} from "../../controllers/users.controller.js";

const router = Router();

router.post("/login", createUser);
router.get("/login/:email", checkLogin);
router.get("/users/api/", getUsers);
router.post

export default router;

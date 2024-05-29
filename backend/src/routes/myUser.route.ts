import express from "express";
import myUserController from "../controllers/myUser.controller";
import { jwtCheck } from "../middlewares/auth";

const router = express.Router();

//  /api/my/user
router.post("/", jwtCheck, myUserController.createCurrentUser);

export default router;

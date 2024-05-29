import express from "express";
import myUserController from "../controllers/myUser.controller";

const router = express.Router();

//  /api/my/user
router.post("/", myUserController.createCurrentUser);

export default router;

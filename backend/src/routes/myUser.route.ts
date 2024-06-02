import express from "express";
import myUserController from "../controllers/myUser.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyUserUpdateRequest } from "../middlewares/validate";

const router = express.Router();

//  /api/my/user
router.get("/", jwtCheck, jwtParse, myUserController.getCurrentUser)
router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserUpdateRequest,
  myUserController.updateCurrentUser
);

export default router;

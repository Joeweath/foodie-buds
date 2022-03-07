import { Router } from "express";
import * as foodiesCtrl from "../controllers/foodies.js";
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router();

router.get("/", foodiesCtrl.index);

router.post("/", isLoggedIn, foodiesCtrl.create);

export { router };

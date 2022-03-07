import { Router } from "express";
import * as foodiesCtrl from "../controllers/foodies.js";
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router();

router.get("/", foodiesCtrl.index);
router.get("/new", isLoggedIn, foodiesCtrl.new);
router.get("/:id", foodiesCtrl.show);
router.get("/:id/edit", isLoggedIn, foodiesCtrl.edit);

router.post("/", foodiesCtrl.create);

router.delete("/:id", isLoggedIn, foodiesCtrl.delete);

router.put("/:id", isLoggedIn, foodiesCtrl.update);

export { router };

import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

// Declaração de controllers
const userController = new UserController();

// Declaração de rotas
router.get("/", (req, res)=>{ return res.json({hello: "world"})});
router.get("/list_users", userController.list);
router.post("/create_user", userController.create);

export default router;

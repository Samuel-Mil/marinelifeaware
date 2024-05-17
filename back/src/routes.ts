import { Router } from "express";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";

const router = Router();

// Declaração de controllers
const userController = new UserController();
const authController = new AuthController();

// Declaração de rotas
router.get("/", (req, res)=>{ return res.json({hello: "world"})});
router.get("/list_users", userController.list);
router.post("/create_user", userController.create);
router.post("/login", authController.login);

export default router;

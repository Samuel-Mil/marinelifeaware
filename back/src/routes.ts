import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

// Declaração de controllers
const userController = new UserController();

// Declaração de rotas
router.get("/", userController.helloworld);

export default router;

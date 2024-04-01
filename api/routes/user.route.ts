import { Router } from "express"

import * as userController from "../controllers/user.controller"

const router = Router()

router.post("/user", userController.createUser)
router.get("/user", userController.getAllUsers)
router.get("/user/:id", userController.getUserById)
router.post("user/:id", userController.updateUser)
router.delete("/user/:id", userController.deleteUser)

export default router

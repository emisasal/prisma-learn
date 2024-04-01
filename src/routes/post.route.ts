import { Router } from "express"
import * as postController from "../controllers/post.controller"

const router = Router()

router.get("/post", postController.getAllPosts)
// Complete missing routes

export default router

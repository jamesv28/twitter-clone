import express from "express";
import { protectRoute } from "../middleware/protectRoutes.js";
import {
  createPost,
  deletePost,
  likeUnlikePost,
  commentPost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.post("/create", protectRoute, createPost);
router.delete("/", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentPost);
export default router;

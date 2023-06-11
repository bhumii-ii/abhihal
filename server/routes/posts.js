import express from "express";
import { getFeedPosts,getUserPosts,likePost , commentUpdate} from "../controllers/posts.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// reading
router.get("/",verifyToken,getFeedPosts);
router.get("/:userID/posts",verifyToken,getUserPosts);

//updtaing
router.patch("/:id/like",verifyToken,likePost);

// updating comments
router.patch("/:id/comment" , verifyToken , commentUpdate)

export default router
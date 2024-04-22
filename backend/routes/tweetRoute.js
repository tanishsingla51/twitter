import express from "express";
import { createTweet, likeOrDislike } from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";
import { deleteTweet } from "../controllers/tweetController.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);

export default router;

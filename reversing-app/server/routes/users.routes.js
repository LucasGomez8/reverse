import { Router } from "express";
import {
  createUser,
  checkLogin,
  getUsers,
  createPost,
  getAllPosts,
  getLastPost_by_id,
  createFollow,
  getFriends,
  getNotFriends,
  deleteFriend
} from "../../controllers/users.controller.js";

const router = Router();

router.post("/users/api/", createUser);
router.get("/users/api/exist/:email/:password", checkLogin);
router.get("/users/api/", getUsers);
router.get("/friends/api/:id", getFriends);
router.get("/not-friends/api/:id", getNotFriends);
router.post("/login/api/post-it", createPost)
router.get("/login/api/post-it", getAllPosts);
router.get('/login/api/post-it/:id', getLastPost_by_id)
router.post("/follow/api/", createFollow)
router.delete("/follow/api/:myid/:followId",deleteFriend );

export default router;

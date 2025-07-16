import express from "express";
import { signUp } from "./../controllers/user-controller";
import { createChat, getChats, getChatMessages, postMessage } from "./../controllers/chat-controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({message: "hello, world"});
});

router.post("/user", signUp);

router.post("/chat", createChat);
router.get("/chat", getChats);
router.get("/chat/:chatId", getChatMessages);
router.post("/chat/:chatId", postMessage);


export default router;


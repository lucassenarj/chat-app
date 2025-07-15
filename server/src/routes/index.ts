import express from "express";
import getRandomAnswer from "./../utils/get-random-answer";
import { signUp } from "./../controllers/user-controller";
import { postMessage } from "./../controllers/message-controller";

const router = express.Router();

const log: {sender: string; text: string; timestamp: string}[] = [];

router.get("/", (req, res) => {
  res.json({message: "hello, world"});
});

router.post("/user", signUp);

router.post("/message", postMessage);

export default router;


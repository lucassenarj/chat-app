import { Request, Response } from "express";
import getRandomAnswer from "./../utils/get-random-answer";
import User from "./../models/user-model";
import Chat from "./../models/chat-model";
import Message from "./../models/message-model";

export const postMessage = async (req: Request, res: Response) => {
  const { user } = req.headers;
  const { message, chatId } = req.body;

  if (!message) {
    return res.status(422).json({ error: 'Invalid message' });
  }

  if (!user) {
    return res.status(401).json({ error: 'Invalid user' });
  }

  try {
    const hasUser = await User.findById(user);

    if (!hasUser) {
      return res.status(401).json({ error: 'Invalid user' });
    }
    const chat = await Chat.findById(chatId).populate('messages');

    if (!chat) {
      return res.status(422).json({ error: 'Invalid chat' });
    }

    const userMessageData = {
      sender: hasUser.name,
      message,
      timestamp: new Date().toISOString(),
    };

    const userMessage = await Message.create(userMessageData);

    if (!userMessage) {
      return res.json(422).json({ error: 'Error while send a new message!' });
    }

    const randomAnswer = getRandomAnswer();

    const botAnswerData = {
      sender: "bot",
      message: randomAnswer,
      timestamp: new Date().toISOString(),
    };

    const botAnswer = await Message.create(botAnswerData);
    await chat.updateOne({ $push: { messages: userMessage }});
    await chat.updateOne({ $push: { messages: botAnswer }});
    await chat.save();

    const messages = [];

    for (let item of chat.messages) {
      messages.push(item);
    }

    messages.push(userMessage);
    messages.push(botAnswer);

    return res.status(200).json({ message: messages });
  } catch (error) {
    // Log error in some log app
    console.error(error);
    return res.status(500).json({ error: 'Error while send a message!' });
  }
}

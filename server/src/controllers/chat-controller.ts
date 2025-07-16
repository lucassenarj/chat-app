import { Request, Response } from "express";
import getRandomAnswer from "./../utils/get-random-answer";
import Chat from "./../models/chat-model";
import Message from "./../models/message-model";
import User from "./../models/user-model";

export const getChats = async (req: Request, res: Response) => {
  const { user } = req.headers;

  if (!user) {
    return res.status(401).json({ error: 'Unauthenticated user!' });
  }

  try {
    const hasUser = await User.findById(user).populate('chats');

    if (!hasUser) {
      return res.status(401).json({ error: 'Unauthenticated user!' });
    }

    const chats = await Chat.find({ owner: hasUser }).sort('-createdAt');

    return res.status(200).json({ chats });
  } catch (error) {
    return res.status(500).json({ error: 'Error while fetching my chats!' });
  }
}

export const createChat = async (req: Request, res: Response) => {
  const { user } = req.headers;
  const { title } = req.body;

  if (!user) {
    return res.status(401).json({ error: 'Unauthenticated user!' });
  }

  if (!title) {
    return res.status(422).json({ error: 'Title is required' });
  }


  try {
    const hasUser = await User.findById(user);

    if (!hasUser) {
      return res.status(401).json({ error: 'Unauthenticated user!' });
    }

    const chat = new Chat({ owner: hasUser, title });
    await chat.save();

    if (!chat) {
      return res.status(422).json({ error: 'Error whilte create a new chat!' });
    }

    return res.status(201).json({ chat });
  } catch (error) {
    return res.status(500).json({ error: 'Error while create a new chat!' })
  }
}

export const getChatMessages = async (req: Request, res: Response) => {
  const { user } = req.headers;
  const { chatId } = req.params;

  if (!user) {
    return res.status(401).json({ error: 'Unauthenticated user!' });
  }

  if (!chatId) {
    return res.status(422).json({ error: 'Chat id is required!' });
  }

  try {
    const hasUser = await User.findById(user).populate('chats');

    if (!hasUser) {
      return res.status(401).json({ error: 'Unauthenticated user!' });
    }

    const chats = await Chat.findById(chatId).populate('messages').sort('-createdAt');

    const messages = [];

    if (chats?.messages) {
      for (const message of chats.messages) {
        messages.push(message);
      }
    }

    return res.status(200).json({ messages });
  } catch (error) {
    return res.status(500).json({ error: 'Error while fetching chat messages!' });
  }
}

export const postMessage = async (req: Request, res: Response) => {
  const { user } = req.headers;
  const { chatId } = req.params;
  const { message } = req.body;

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

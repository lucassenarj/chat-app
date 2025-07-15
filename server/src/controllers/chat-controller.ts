import { Request, Response } from "express";
import User from "./../models/user-model";
import Chat from "./../models/chat-model";

export const createChat = async (req: Request, res: Response) => {
  const { user } = req.headers;

  if (!user) {
    return res.status(401).json({ error: 'Unauthenticated user!' });
  }

  try {
    const hasUser = await User.findById(user);

    if (!hasUser) {
      return res.status(401).json({ error: 'Unauthenticated user!' });
    }

    const chat = new Chat({ owner: hasUser });
    await chat.save()

    if (!chat) {
      return res.status(422).json({ error: 'Error whilte create a new chat!' });
    }

    return res.status(201).json({ chat });
  } catch (error) {
    return res.status(500).json({ error: 'Error while create a new chat!' })
  }
}

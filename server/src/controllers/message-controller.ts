import { Request, Response } from "express";
import User from "./../models/user-model";

export const postMessage = async (req: Request, res: Response) => {
  const { user } = req.headers;
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

    return res.status(200).json({ message: hasUser });
  } catch (error) {
    // Log error in some log app
    console.error(error);
    return res.status(500).json({ error: 'Error while send a message!' });
  }
}

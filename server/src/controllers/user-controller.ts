import { Request, Response } from "express";
import User from "./../models/user-model";

export const signUp = async (req: Request, res: Response) => {
  const { username, name } = req.body;

  if (!username || !name) {
    res.status(422).json({ error: 'Username or email invalid!' });
    return;
  }

  try {
    const hasUser = await User.findOne({ username, name });

    if (hasUser) {
      return res.status(200).json({ user: hasUser });
    }

    const user = new User({ username, name });
    await user.save();

    if (!user) {
      res.status(422).json({ error: 'Error while create the user' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error while login in the app' });
  }
};


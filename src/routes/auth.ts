// Libraries Imported
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";  
import { z } from "zod";
import { User } from "../database/db"; 
import { OAuth2Client } from 'google-auth-library';

// Creating Express Instance
const loginRouter: Router = Router();
const JWT_SECRET = process.env.JWT_SECRET as string;
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

loginRouter.post('/google-login', async (req:Request, res: Response) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if(!payload || !payload.email) {
      res.status(401).json({ message: "Invalid Google token "});
      return;
    }

    console.log(payload);

    const { email, name, picture, sub  } = payload;

    let user = await User.findOne({ email });
    if(!user) {
      user = await User.create({
        email,
        username: name || email.split('@')[0],
        googleId: sub,
        profilePictureUrl: picture,
      });
    }

    const appToken = jwt.sign({ id: user.id.toString() }, JWT_SECRET);
    res.status(200).json({ token: appToken });
    return;

  } catch (error) {
    console.error("Error verifying Google token", error);
    res.status(500).json({ message: "Server error during Google login"});
    return;
  }
})

export default loginRouter;


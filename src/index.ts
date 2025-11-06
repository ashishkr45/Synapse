import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import loginRouter from "./routes/auth";
import contentRouter from "./routes/content";

const app = express();
const port = 3000;

// Middlewares
app.use(cors()); 
app.use(express.json());

// Connecting the routers
app.use("/api/auth", loginRouter); 
app.use("/api/content", contentRouter);

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined in .env file");
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
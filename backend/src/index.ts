import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoutes from "./routes/myUser.route";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log(err.message));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoutes);

app.listen(7000, () => {
  console.log("Server started on localhost: 7000");
});

import express from "express";
import authRouter from "./routes/auth.routes.js";
const app = express();

//global Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Gaming Platform API is running",
  });
});


app.use("/api/v1/auth", authRouter);
export default app;

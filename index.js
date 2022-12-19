import { logger } from "./middleware/logger.js";
import express from "express";
import questions from './routes/getQuestions.js'
import questionfromsection from './routes/getSectionQuestions.js'
const app = express();
const PORT = process.env.PORT || 5000
app.use(logger);
app.use("/api", questions)
app.use("/api", questionfromsection)
app.use(express.json())


app.get("/", (req, res, next) => {
  res.status(200).send({
    status: true,
    message: "hello world!",
  }); 
});


app.all("*", logger, (req, res) => {
  res.status(200).send({
    status: true,
    message: "WTF do you want",
  });
});





app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

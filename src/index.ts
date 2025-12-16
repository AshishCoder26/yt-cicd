import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});



// create expess js routes to retun a random quotes
const quotes = [
  "Be yourself; everyone else is already taken.",
  "Success is not final, failure is not fatal.",
  "Do what you can, with what you have, where you are.",
  "Dream big and dare to fail.",
  
];
app.get("/quote", (req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return res.json({ quote: randomQuote });
});






app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));



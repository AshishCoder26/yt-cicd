import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
const PORT = Number(process.env.PORT) || 7000;
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    return res.send("It's working 🙌");
});
// Create Express route to return a random quote
const quotes = [
    "Be yourself; everyone else is already taken.",
    "Success is not final, failure is not fatal.",
    "Do what you can, with what you have, where you are.",
    "Dream big and dare to fail.",
];
app.get("/quote", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    return res.json({ quote: randomQuote });
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on PORT ${PORT}`);
    console.log(`Bound to 0.0.0.0 — test with http://localhost:${PORT}`);
});
export default app;

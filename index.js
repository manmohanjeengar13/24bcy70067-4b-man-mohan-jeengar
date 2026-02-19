import express from "express";
import cors from "cors";
import cardRoutes from "./routes/card.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`📌 ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Playing Card API running 🚀");
});

app.use("/cards", cardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

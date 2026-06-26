const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const weddingRoutes = require("./routes/weddingRoutes");
const connectDB = require("./config/db");
const authRoutes = require(
  "./routes/authRoutes"
);
dotenv.config();
//console.log(process.env.MONGO_URI);
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/api/auth",
  authRoutes
);
app.use(
  "/api/weddings",
  weddingRoutes
);


app.get("/", (req, res) => {
    res.send("Wedding Planner API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import dailyRoutes from "./routes/dailyRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/daily", dailyRoutes)


//app.get("/", (req, res) => {
  //root route http://localhost:5000/
  //res.send("Hello World!!!");
//});




app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});

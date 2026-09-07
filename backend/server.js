const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./src/config/db");
const errorHandler = require("./src/middleware/errorHandler");
const insightRoutes = require("./src/routes/insightRoutes");

dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "http://127.0.0.1:5173", "http://127.0.0.1:5174", "http://localhost:5175", "http://127.0.0.1:5175"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(errorHandler);

app.use("/api/insights", insightRoutes);

connectDB();




app.get("/", (req, res) =>{
    res.json({
        message: "Visualization Dashboard API is running"
    })
})


const PORT = 5000;

app.listen(PORT,  () =>{
    console.log(`Server running on port ${PORT}`);
});
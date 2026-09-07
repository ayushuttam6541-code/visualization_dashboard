const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Insight = require("./models/Insight");
const connectDB = require("./config/db");

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    const filePath = path.join(
      __dirname,
      "../../data/jsondata.json"
    );

    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(rawData);

    const cleanedData = jsonData.map((item) => ({
      ...item,

      intensity:
        item.intensity === "" || item.intensity == null
          ? 0
          : Number(item.intensity),

      likelihood:
        item.likelihood === "" || item.likelihood == null
          ? 0
          : Number(item.likelihood),

      relevance:
        item.relevance === "" || item.relevance == null
          ? 0
          : Number(item.relevance),

      city: item.city || "",
      swot: item.swot || "",
    }));

    await Insight.deleteMany();

    await Insight.insertMany(cleanedData);

    console.log(
      `${cleanedData.length} insights imported successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error("Data import failed:", error.message);
    process.exit(1);
  }
};

importData();
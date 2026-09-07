
const Insight = require("../models/Insight");

const getInsights = async (req, res) => {
  try {
    const insights = await Insight.find();

    res.status(200).json(insights);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch insights",
      error: error.message
    });
  }
};

module.exports = {
  getInsights
};
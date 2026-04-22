const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("Trying to connect to MongoDB...")
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(" DB ERROR:", error.message);
    process.exit(1); // stop app if DB fails
  }
};

module.exports = connectDB;
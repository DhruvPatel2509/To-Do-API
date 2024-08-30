const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = () => {
  // Validate the DATABASE_URL environment variable
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL environment variable is not defined.");
    process.exit(1);
  }

  // Connect to the MongoDB database
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DATABASE Connection Successfully");
    })
    .catch((error) => {
      console.error("Error in DATABASE connection:", error);
      // Retry connection logic can be added here
      process.exit(1);
    });

  // Graceful shutdown: Close database connection on process exit
  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("MongoDB connection disconnected through app termination");
      process.exit(0);
    });
  });
};

module.exports = dbConnect;

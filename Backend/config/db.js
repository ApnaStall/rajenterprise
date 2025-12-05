mongoose.set('bufferCommands',false)
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/raj_enterprise",{serverSelectionTimeoutMS:50000});
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.reason);
  
    process.exit(1);
  }
};

module.exports = connectDB;

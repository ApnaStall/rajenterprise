const express = require("express");
const cors = require("cors");
const connectDB=require("./config/db.js");
const userRoutes=require("./routes/userroutes.js");
const mongoose = require("mongoose");

const app = express();
   try {
      mongoose.connect("mongodb://127.0.0.1:27017/raj_enterprise",{serverSelectionTimeoutMS:50000});
     console.log("MongoDB Connected Successfully");
   } catch (error) {
     console.error("MongoDB Connection Failed:", error.reason);
   
     process.exit(1);
   }
 

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Server is running on ${PORT}`);
});
app.use('/users/',userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

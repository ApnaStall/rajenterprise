const express = require("express");
const cors = require("cors");
const connectDB=require("./config/db.js");
const userRoutes=require("./routes/userroutes.js");
connectDB()
const app = express();
   
 

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

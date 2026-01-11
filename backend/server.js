const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect<>
.then(() => console.log("MongoDB Connectserver.jsed"));
jwt.sign({ id: user._id }, process.env.JWT_SECRET)
jwt.verify(token, process.env.JWT_SECRET)

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));




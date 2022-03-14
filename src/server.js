const express = require("express");
const connectDB = require("../db/Connection");
const app = express();

/* const backup = require("../db/Backup"); */

connectDB();
app.use(express.json({ extended: false }));
app.use("/api/userModel", require("../api/User"));
const Port = process.env.PORT || 3000;

app.listen(Port, () => console.log("Server started on port " + Port));

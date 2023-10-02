const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const StudentAuthRoute = require("./routes/StudentAuth");
const studentRoute = require("./routes/students");
const OnlineFeesRoute = require("./routes/OnlineFeeses");
const PhysicalFeesRoute = require("./routes/PhysicalFeeses");
const NotificationRoute = require("./routes/Notifications");
const schedRoute = require("./routes/exam_schedules");

 dotenv.config();
 app.use(express.json());

 mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

 app.use("/api/StudentAuth", StudentAuthRoute);
 app.use("/api/students", studentRoute);
 app.use("/api/OnlineFeeses", OnlineFeesRoute);
 app.use("/api/PhysicalFeeses", PhysicalFeesRoute);
 app.use("/api/Notifications", NotificationRoute);
 app.use("/api/exam_schedules", schedRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});


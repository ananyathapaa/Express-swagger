

const express = require("express");

const cors = require("cors");

const swaggerUi = require("swagger-ui-express");

const connectDB = require("./src/config/db");

const authRoutes = require("./src/routes/auth.routes");

const swaggerSpec = require("./src/swagger/swagger");

const app = express();
require("dotenv").config();

const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

connectDB();

app.use(cors());

app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use("/api/v1/auth", authRoutes);

app.get("/", (req,res)=>{
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`);
});

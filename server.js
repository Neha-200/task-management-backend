require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoute = require("./router/auth-router");
const taskRoute = require("./router/task-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware")

const app = express();

const corsOptions = {
    origin: "http://localhost:5173/",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  }

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute); 

app.use("/api", taskRoute);

app.use(errorMiddleware);

const PORT = 5007;

connectDb().then(() =>{
    app.listen(PORT, () => {
      console.log(`server is running`);
    });
});
import express from "express";
import cors from "cors";
import routes from "./routes";
import dbConnection from "./services/db";

dbConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});


import express from "express";
import morgan from "morgan";

const PORT = 3001;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

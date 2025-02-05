import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
// import routers from "./api/routes";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Content-Type",
      "Authorization",
      "Origin",
      "X-Requested-With",
      "Accept",
      "X-HTTP-Method-Override",
      "x-access-token",
      "x-custom-header",
    ],
  })
);
app.use(json());
app.use(helmet());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
// app.use(routers);

app.get("/", (_req, res) => {
  res.json({
    message: "Hello, connected to server",
  });
});


export default app;

import "express-async-errors";
import express from "express";
import { globalError } from "./Errors/errors";
import { routeUser } from "./Routes/main.Routes";

const app = express();
app.use(express.json());
app.use("", routeUser);
app.use(globalError);

export default app;

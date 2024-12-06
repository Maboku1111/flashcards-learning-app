import http from "http";
import { app } from "./routes.js";

const PORT = 3000;

const server = http.createServer(app).listen(PORT);

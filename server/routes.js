import express from "express";
import cors from "cors";
import pool from "./dbConfig.js"

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is up & running, mate.')
})

export {app};
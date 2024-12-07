import express from "express";
import cors from "cors";
import { client } from "./dbConfig.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is up & running, mate.");
});

app.get("/flashcards", async (req, res) => {
  try {
    const results = await client.query("SELECT * FROM flashcards;");
    return res.json(results.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/flashcards", async (req, res) => {
  const { question, answer, box } = req.body;
  try {
    const results = await client.query(
      "INSERT INTO flashcards (question, answer, box) VALUES ($1, $2, $3);",
      [question, answer, box]
    );
    return res.json(results.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.put("/flashcards/:id", async (req, res) => {
  const { id } = req.params.id;
  const { question, answer, box } = req.body;
  try {
    const results = await client.query(
      "UPDATE flashcards SET question=$1, answer=$2, box=$3 WHERE id=$4",
      [question, answer, box, id]
    );
    return res.json(results.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.delete("/flashcards/:id", async (req, res) => {
  const { id } = req.params.id;
  try {
    const results = await client.query("DELETE FROM flashcards WHERE id=$1", [
      id,
    ]);
    return res.json(results.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.patch("flashcards/:id/move", async (req, res) => {
  const { id } = req.params.id;
  const { box } = req.body;
  try {
    const results = await client.query(
      "UPDATE flashcards SET box=$1 WHERE id=$2;",
      [box, id]
    );
    return res.json(results.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

export { app };

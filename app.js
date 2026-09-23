require('dotenv').config();
const {randomUUID} = require('crypto');
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const middlewareLogger = (req, res, next) => {
  const timestamp = new Date().toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  console.log(`${timestamp} `);
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(middlewareLogger);

app.use(express.json());

// In-memory storage (shared data store from data/notes.js)
let notes = require("./data/notes");

// Health check (root)
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Note-Taking API is running" });
});

// GET all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Get One Note
app.get('/api/notes/:id', (req, res) => {
    const note = notes.find(note => String(note.id) === req.params.id);
    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
});

// POST create note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }
  const newNote = {
    id: randomUUID(),
    title,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// PUT /notes/:id - Update a note (your task)
app.put("/notes/:id", (req, res) => {
  const { title, content } = req.body;

  const noteIndex = notes.findIndex((note) => String(note.id) === req.params.id);
  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }
  notes[noteIndex] = {
    ...notes[noteIndex],
    title,
    content,
    updatedAt: new Date(),
  };

  res.json(notes[noteIndex]);
});

// DELETE a note
app.delete('/notes/:id', (req, res) => {
    const note = notes.find(note => String(note.id) === req.params.id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    notes = notes.filter(note => String(note.id) !== req.params.id);

    res.status(200).json({ message: "Note deleted successfully" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

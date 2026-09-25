const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// In-memory storage
let todos = [{id: 1, title: "My first task"}];
let currentId = 2;

// Routes
// 1. GET all todos - you already tested this and it works
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// 2. GET one todo by id
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

// 3. POST - create a new todo
app.post('/api/todos', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const newTodo = { id: currentId++, title: req.body.title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 4. PUT - update a todo
app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  todo.title = req.body.title || todo.title;
  res.json(todo);
});

// 5. DELETE - delete a todo
app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
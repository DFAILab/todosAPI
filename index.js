const express = require('express'); // import dependencies
const app = express(); // Create a new express application object

app.use(express.json()); // Middleware to parse JSON bodies

 // In-memory storage for todos
let todos = [
  {
    id: 1,
    title: "Learn JavaScript",
    completed: false
  },
  {
    id: 2,
    title: "Build a Todo List API",
    completed: false
  },
  {
    id: 3,
    title: "Explore Express Middleware",
    completed: true
  }
];

// middleware
app.get('/', (req, res, next) => {
    res.send('<h1>Welcome!<h1>');
})
// Create a new Todo
app.post('/todos', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Get all Todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get a single Todo by ID
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  res.json(todo);
});

// Update a Todo by ID
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Delete a Todo by ID
app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));

  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
})

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

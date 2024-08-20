const express = require('express'); // import dependencies
const mongoose = require('mongoose');
const Todos = require('./models/todosModel')
const app = express(); // Create a new express application object

app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({extended: false}))

 // In-memory storage for todos
let todos = [];

// middleware
app.get('/', (req, res, next) => {
    res.send('<h1>Welcome!<h1>');
})

// Create a new Todo
app.post('/todos', async(req, res) => {
  try {
    const newTodo = await Todos.create(req.body);  
    res.status(200).json(newTodo);

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message : error.message})
  }
})

// Get all Todos
app.get('/todos', async(req, res) => {
  try {
    const newTodo =  await Todos.find({});
    res.status(200).json(newTodo);
  }
  catch (error) {
    res.status(500).json({ message : error.message})
  }
})

// Get a single Todo by ID
app.get('/todos/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const newTodo =  await Todos.findById(id);
    res.status(200).json(newTodo);
  }
  catch (error) {
    res.status(500).json({ message : error.message})
  }
})

// Update a Todo by ID
app.put('/todos/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const newTodo =  await Todos.findByIdAndUpdate(id,req.body);
    if (!newTodo){
      return res.status(404).json({ message : 'cannot find any todo with ID ${id}'})
    }
    const updatedTodo = await Todos.findById(id);
    res.status(200).json(newTodo);
  }
  catch (error) {
    res.status(500).json({ message : error.message})
  }
})

// Delete a Todo by ID
app.delete('/todos/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const newTodo =  await Todos.findByIdAndDelete(id);
    if (!newTodo){
      return res.status(404).json({ message : 'cannot find any todo with ID ${id}'})
    }
    res.status(200).json(newTodo);
  }
  catch (error) {
    res.status(500).json({ message : error.message})
  }
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

mongoose
.connect('mongodb+srv://farahwan:Farah2024@todosapi.elne5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TodosAPI')
.then(() => {
  console.log('connected to MongoDB')
}).catch ((error) => {
  console.log(error)
})
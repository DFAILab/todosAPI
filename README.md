# todosAPI

## Description
Todos API is a simple RESTful API that allows users to manage their to-do lists. This API provides functionality to create, read, update, and delete to-do items.

## Features
- **Create** to-dos
- **Read** a list of to-dos or a single to-do item
- **Update** existing to-dos
- **Delete** to-dos

## Technologies
This API is built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/). Data is stored in a [MongoDB](https://www.mongodb.com/) database.

## Installation

### Prerequisites
- Node.js
- npm (Node package manager)
- MongoDB

### Setting Up a Local Development Environment
Clone the repository to your local machine:
git clone https://github.com/DFAILab/todosAPI.git
cd todosAPI


Install the necessary dependencies:
npm install

Start the server:
npm start

The server will start on "http://localhost:3000".

## Usage
### API Endpoints

| Method | Endpoint     | Description               |
|--------|--------------|---------------------------|
| GET    | /todos       | Fetch all to-dos          |
| GET    | /todos/:id   | Fetch a single to-do by ID|
| POST   | /todos       | Create a new to-do        |
| PUT    | /todos/:id   | Update an existing to-do  |
| DELETE | /todos/:id   | Delete a to-do            |

### Example

To create a new to-do:
bash
curl -X POST http://localhost:3000/todos -H 'Content-Type: application/json' -d '{"title": "New Todo", "description": "Complete this task."}'

## Contributing
Contributions are welcome! Please fork the repository and open a pull request with your changes.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Contact
For any additional questions or comments, please email dfailab@gmail.com (mailto:dfailab@gmail.com).

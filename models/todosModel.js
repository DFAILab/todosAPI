const mongoose = require('mongoose')
const todosSchema = mongoose.Schema(
    {
        title: {
            type : String,
            required : [true, "Please enter a title"]
        },
        completed: {
            type : Boolean,
            required : [false]
        }
    }
)
const Todos = mongoose.model('Todos',todosSchema);
module.exports = Todos;
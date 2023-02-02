const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
});

module.exports = new mongoose.model('Todo', TodoSchema);
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title"]
    },
    description: {
        type: String,
        required: [true, "Please enter the description"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const taskModel = mongoose.model('task',taskSchema);  //'task' this is the table name to be created...

module.exports = taskModel;
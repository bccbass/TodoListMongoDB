const mongoose = require("mongoose");

// const newDate = new Date().toString().split(' ').slice(1, 4).join(' ')


const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    due: {
        type: String,

    },
    isUrgent: {
        type: Boolean,
        default: false,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false
    }
})

const Task = new mongoose.model('Task', taskSchema);

module.exports = Task;
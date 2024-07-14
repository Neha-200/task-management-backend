const mongoose = require('mongoose');
const User = require('./user-model');

const TaskSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: User.modelName,
        require: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now,
        require: true
    },
    completeDate: {
        type: Date,
        default: Date.now,
        require: true
    },
});

module.exports = mongoose.model('Task', TaskSchema);


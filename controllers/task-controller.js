const Task = require("../models/task-model");

// get all tasks
const allTasks = async (req, res) => {
    try {
        console.log("req.user:", req.user); // Add this line to debug
        const tasks = await Task.find({ userId: req.user._id });
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: 'Server error' });
    }
};


// create new task
const newTask = async (req, res) => {
    try {
        const task = new Task({
            userId: req.user._id,
            title: req.body.title,
            description: req.body.description,
            startDate: req.body.startDate,
            completeDate: req.body.completeDate,
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        console.error("Error creating new task:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// get a single task by id
const singleTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error("Error fetching task by ID:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// update a task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                startDate: req.body.startDate,
                completeDate: req.body.completeDate,
            },
            { new: true }
        );
        res.status(200).json(task);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// delete a task
const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: 'Server error' });
    }
}


module.exports = {allTasks, newTask, singleTaskById, updateTask, deleteTask};












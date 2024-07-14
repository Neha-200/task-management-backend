const Task = require('../models/task-model');

const checkTaskOwnership = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        if (task.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = checkTaskOwnership;

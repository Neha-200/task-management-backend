const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task-controller");
const checkTaskOwnership = require("../middlewares/task-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/tasks").get(authMiddleware, taskController.allTasks); //get all task

router.route("/task").post(authMiddleware, taskController.newTask);  //create new task

router.route("/task/:id").get(authMiddleware, checkTaskOwnership, taskController.singleTaskById);  //get single task by id

router.route("/task/:id").put(authMiddleware, checkTaskOwnership, taskController.updateTask);  //update single task by id

router.route("/task/:id").delete(authMiddleware, checkTaskOwnership, taskController.deleteTask);  //delete single task by id

module.exports = router;
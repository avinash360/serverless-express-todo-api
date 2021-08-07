const express = require("express");
const router = express.Router();
const {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
} = require("../dbQueries");

router.get("/tasks/:taskId", async (req, res) => {
    const { taskId } = req.params;
    const tasks = await getTasks(taskId);
    return res.status(200).json({
        tasks,
    });
});

router.post("/tasks", async (req, res) => {
    const added = await addTask(req.body);
    if (added) {
        return res.status(201).json({
            message: "Task added successfully",
        });
    } else {
        return res.status(409).json({
            message: "Could not add Task",
        });
    }
});

router.put("/tasks/:taskId", async (req, res) => {
    const { taskId } = req.params;
    const updated = await updateTask(taskId, req.body);
    if (updated) {
        return res.status(200).json({
            message: "Task updated successfully",
        });
    } else {
        return res.status(409).json({
            message: "Could not update Task",
        });
    }
});

router.delete("/tasks/:taskId", async (req, res) => {
    const { taskId } = req.params;
    const deleted = await deleteTask(taskId);
    if (deleted) {
        return res.status(200).json({
            message: "Task deleted successfully",
        });
    } else {
        return res.status(409).json({
            message: "Could not delete Task",
        });
    }
});

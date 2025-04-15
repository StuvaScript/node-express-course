const Task = require("../models/task");

function getAllTasks(req, res) {
  res.send("get all tasks");
}

async function createTask(req, res) {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
}

function getTask(req, res) {
  res.json({ id: req.params.id });
}

function updateTask(req, res) {
  res.send("update task");
}

function deleteTask(req, res) {
  res.send("delete task");
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };

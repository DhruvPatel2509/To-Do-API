const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { getTodos, getTodoById } = require("../controllers/getTodos");

// Route to create a todo item
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodoById/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;

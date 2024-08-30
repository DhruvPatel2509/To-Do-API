const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, description, updatedAt: Date.now() }, // corrected updatedAt field
      { new: true } // to return the updated todo
    );

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

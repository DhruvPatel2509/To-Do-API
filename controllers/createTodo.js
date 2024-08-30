const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    // Validate input
    if (!req.body.title || !req.body.description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required fields.",
      });
    }

    // Create todo
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });

    // Log success
    console.log("Todo created:", response);

    // Send success response
    res.status(200).json({
      success: true,
      data: response,
      message: "Todo created successfully.",
    });
  } catch (error) {
    // Log error
    console.error("Error creating todo:", error);

    // Send error response
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

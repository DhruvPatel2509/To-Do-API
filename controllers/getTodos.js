const Todo = require("../models/Todo");

// Function to handle getting all todos
exports.getTodos = async (req, res) => {
  try {
    // Fetch all todos from the database
    const todos = await Todo.find({});

    // Respond with a success status and the fetched todos
    res.status(200).json({
      success: true,
      data: todos,
      message: "All todos retrieved successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error in getTodos:", error);

    // Respond with a server error status and the error message
    res.status(500).json({
      success: false,
      message: "Server error while fetching todos",
      error: error.message,
    });
  }
};

// Function to handle getting a todo by its ID
exports.getTodoById = async (req, res) => {
  try {
    // Extract the id parameter from the request
    const id = req.params.id;

    // Find the todo by its ID in the database
    const todo = await Todo.findById(id);

    // If the todo is not found, respond with a not found status
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: `Todo not found with ID: ${id}`,
      });
    }

    // Respond with a success status and the fetched todo
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo retrieved successfully with ID: ${id}`,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error in getTodoById:", error);

    // Respond with a server error status and the error message
    res.status(500).json({
      success: false,
      message: "Server error while fetching todo",
      error: error.message,
    });
  }
};

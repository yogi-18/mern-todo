const Todo = require("./../models/Todo");
const TODO = require("./../models/Todo");
exports.addTodo = async (req, res) => {
  try {
    const result = await Todo.create(req.body);
    // create()  ADD TO DB
    res.json({
      message: "Todo Added Success",
      result,
    });
  } catch (error) {
    res.json({
      message: "error ",
    });
  }
};
exports.getTodo = async (req, res) => {
  try {
    const result = await Todo.find();
    // const result = await Todo.findByIdAndUpdate();
    // const result = await Todo.findByIdAndDelete();
    res.json({
      message: "Todo Fetch  Success",
      result,
    });
  } catch (error) {
    res.json({
      message: "error ",
    });
  }
};
exports.updateTodo = async (req, res) => {
  try {
    // const result = await Todo.find();
    const todoId = req.params.id;
    const result = await Todo.findByIdAndUpdate(todoId, req.body, {
      new: true,
    });
    // const result = await Todo.findByIdAndDelete();
    res.json({
      message: "Todo update  Success",
      result,
    });
  } catch (error) {
    res.json({
      message: "error ",
    });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    // const result = await Todo.find();
    const todoId = req.params.id;
    const result = await Todo.findByIdAndDelete(todoId);

    res.json({
      message: "Todo delete  Success",
      result,
    });
  } catch (error) {
    res.json({
      message: "error ",
    });
  }
};

const Task = require('../Models/taskModel');

exports.addTask = async (req, res) => {
    const data = await Task.create(req.body);

    res.status(200).json({
        success: true,
        message: "Task added successfully",
        data
    });
};
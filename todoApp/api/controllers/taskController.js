const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.all_tasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
   });
};

exports.create_task = (req, res) => {
  const new_task = new Task(req.body);
  new_task.save((err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.load_task = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
}

exports.update_task = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    }
  );
};

exports.delete_task = (req, res) => {
  Task.remove(
    {
      _id: req.params.taskId
    },
    (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'Task successfully deleted'
      });
    }
  );
}

const router = require('express').Router();

let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const task = req.body.task;
    const completed = false;

    const newTodo = new Todo({
        username,
        task,
        completed,
    });

    newTodo.save()
        .then(() => res.json('Todo added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({
        message: 'Added Todo',
        todo: newTodo,
        todos: todos
    });
});
router.get('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const todoId = params.todoId;
    const todo = todos.find(todoItem => todoItem.id === todoId);
    if (todo) {
        return res.status(200).json({ todo: todo });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const todoId = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text,
        };
        return res.status(201).json({
            message: 'Updated todo',
            todos: todos
        });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const todoId = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === todoId);
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        return res.status(204).json({
            message: 'Deleted todo',
            todos: todos
        });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
});
exports.default = router;

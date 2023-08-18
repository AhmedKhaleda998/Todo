import { Router } from 'express';

import { Todo } from '../models/todo';

type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
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
    const params = req.params as RequestParams;
    const todoId = params.todoId;
    const todo = todos.find(todoItem => todoItem.id === todoId);
    if (todo) {
        return res.status(200).json({ todo: todo });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
});

router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams;
    const todoId = params.todoId;
    const body = req.body as RequestBody;
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
    const params = req.params as RequestParams;
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

export default router;
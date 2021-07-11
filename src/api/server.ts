import Fastify from 'fastify';
import { ITodoBody } from './type_helpers';
import createTodo from '../gRPC/client/create_todo';
import readTodos from '../gRPC/client/read_todos';
import fastifyCors from 'fastify-cors';

export const fastify = Fastify({ logger: true });

fastify.register(fastifyCors, {
    origin: '*'
});

fastify.get('/', (request, response) => {
    response.send({ message: 'API gRPC' })
});

fastify.post<{ Body: ITodoBody }>('/todo', (request, response) => {
    const text = request.body.text;
    createTodo(text).then(result =>
        response.status(200).send(JSON.parse(result))
    );
});

fastify.get('/todos', (request, response) => {
    readTodos().then(result =>
        response.status(200).send(JSON.parse(result))
    );
});
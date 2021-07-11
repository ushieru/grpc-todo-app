import * as grpc from "@grpc/grpc-js";
import { client } from './client';
import { TodoItem } from '../proto/todo_pb';

export default async (todoItem: TodoItem) => {
    new Promise(resolve => {
        const stream: grpc.ClientUnaryCall = client.createTodo(todoItem, (err, response) => {
            if (err) console.log(err);
            console.log('[createTodo] Todo: ' + JSON.stringify(response.toObject()));
            resolve(null);
        });
    });
}

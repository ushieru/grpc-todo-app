import * as grpc from "@grpc/grpc-js";
import { client } from './client';
import { Void } from '../proto/todo_pb';

export default async () => {
    new Promise(resolve => {
        const stream: grpc.ClientUnaryCall = client.readTodos(new Void(), (err, response) => {
            if (err) console.log(err);
            console.log('[createTodo] Todo: ' + JSON.stringify(response.toObject()));
            resolve(null);
        });
    });
}

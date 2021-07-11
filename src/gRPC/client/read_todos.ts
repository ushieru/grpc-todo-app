import { client } from './client';
import { Void } from '../proto/todo_pb';

export default async (): Promise<string> => {
    return new Promise(resolve => {
        client.readTodos(new Void(), (err, response) => {
            if (err) console.log(err);
            console.log('[createTodo] Todo: ' + JSON.stringify(response.toObject()));
            resolve(JSON.stringify(response.toObject()));
        });
    });
}

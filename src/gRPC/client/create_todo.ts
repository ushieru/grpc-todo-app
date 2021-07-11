import { client } from './client';
import { TodoItem } from '../proto/todo_pb';

export default async (text: string): Promise<string> => {
    return new Promise(resolve => {
        const todoItem = new TodoItem().setText(text);
        client.createTodo(todoItem, (err, response) => {
            if (err) console.log(err);
            console.log('[createTodo] Todo: ' + JSON.stringify(response.toObject()));
            resolve(JSON.stringify(response.toObject()));
        });
    });
}

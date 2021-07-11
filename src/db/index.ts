import DbRepository from './db_repository';
import { TodoItem } from './../proto/todo_pb';

export default class DB implements DbRepository {
    static database: TodoItem[] = [];

    getNextID(): number {
        return DB.database.length + 1;
    }

    addTodo(todoItem: TodoItem): TodoItem {
        DB.database.push(todoItem);
        return todoItem;
    }
}
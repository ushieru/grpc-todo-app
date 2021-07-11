import { TodoItem } from './../proto/todo_pb';

export default interface DbRepository {
    getTodos(): TodoItem[];
    addTodo(todoItem: TodoItem): TodoItem;
}
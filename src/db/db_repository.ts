import { TodoItem } from './../proto/todo_pb';

export default interface DbRepository {
    addTodo(todoItem: TodoItem): TodoItem;
}
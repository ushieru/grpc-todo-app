import { TodoItem } from '../gRPC/proto/todo_pb';

export default interface DbRepository {
    getTodos(): TodoItem[];
    addTodo(todoItem: TodoItem): TodoItem;
}
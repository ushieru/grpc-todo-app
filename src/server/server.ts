import * as grpc from "@grpc/grpc-js";
import DB from './../db';

import { ITodoServer } from './../proto/todo_grpc_pb';
import { TodoItem } from './../proto/todo_pb';


const db = new DB();

export default class Server implements ITodoServer {
    [name: string]: grpc.UntypedHandleCall;
    
    public createTodo(call: grpc.ServerUnaryCall<TodoItem, TodoItem>, callback: grpc.sendUnaryData<TodoItem>) {
        const todoItem = new TodoItem();
        
        todoItem.setId(db.getNextID()).setText(call.request.getText());
        db.addTodo(todoItem);

        callback(null, todoItem);
    }

    public readTodos(call: any, callback: any) { };
}
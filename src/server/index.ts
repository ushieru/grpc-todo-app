import * as grpc from "@grpc/grpc-js";
import Server from './server';
import { TodoService } from './../proto/todo_grpc_pb';

const ADDRESS = `127.0.0.1:${process.env.PORT || 3000}`;

const server = new grpc.Server();

server.addService(TodoService, new Server());
server.bindAsync(ADDRESS, grpc.ServerCredentials.createInsecure(), (error, port) => {
    server.start();
    console.log(`Server started, listening: ${ADDRESS}`);
});


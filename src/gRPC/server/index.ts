import * as grpc from "@grpc/grpc-js";
import Server from './server';
import { TodoService } from '../proto/todo_grpc_pb';
import * as dotenv from 'dotenv';

dotenv.config();

const ADDRESS = `127.0.0.1:${process.env.PORT || process.env.gRPC_PORT || 8888}`;

const server = new grpc.Server();

server.addService(TodoService, new Server());
server.bindAsync(ADDRESS, grpc.ServerCredentials.createInsecure(), (error, port) => {
    server.start();
    console.log(`Server started, listening: ${ADDRESS}`);
});


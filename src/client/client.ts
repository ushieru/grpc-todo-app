import * as grpc from "@grpc/grpc-js";
import { TodoClient } from '../proto/todo_grpc_pb';

const ADDRESS = `127.0.0.1:${process.env.PORT || 3000}`;

export const client = new TodoClient(ADDRESS, grpc.credentials.createInsecure());

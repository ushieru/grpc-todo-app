import * as grpc from "@grpc/grpc-js";
import { TodoClient } from '../proto/todo_grpc_pb';
import * as dotenv from 'dotenv';

dotenv.config();

const ADDRESS = `127.0.0.1:${process.env.PORT || process.env.gRPC_PORT || 8888}`;

export const client = new TodoClient(ADDRESS, grpc.credentials.createInsecure());

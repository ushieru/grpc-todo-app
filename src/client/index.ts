import { TodoItem } from '../proto/todo_pb';
import createTodo from './create_todo';

createTodo(new TodoItem().setText('Todo'));
import { TodoItem } from '../proto/todo_pb';
import createTodo from './create_todo';
import readTodos from './read_todos';

(async () => {
    await createTodo(new TodoItem().setText('Todo'));
    await readTodos();
})();
import createTodo from './create_todo';
import readTodos from './read_todos';

(async () => {
    await createTodo('homework');
    await readTodos();
})();
import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import { readTodos, createTodo } from './service/todo'

export default function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        readTodos().then(setTodos);
    }, []);

    const addTask = () => {
        createTodo(task).then(_ =>
            readTodos().then(setTodos)
        );
        setTask('');
    }

    return <>
        <div className='flex flex-col justify-center items-center w-screen h-screen'>
            <h1 className='font-bold mb-4 text-3xl'>gRPC + Fastify + React</h1>
            <div className='w-96 flex'>
                <input
                    type="text"
                    placeholder="task"
                    className='w-full border-2 border-gray-900 rounded-md px-2'
                    value={task}
                    onChange={event => setTask(event.target.value)}
                />
                <button className='bg-blue-500 text-white font-semibold px-2 py-1 rounded-md ml-2' onClick={addTask} >
                    Add
                </button>
            </div>
            <div className='h-4/6 overflow-auto max-w-md mt-4 overscroll-contain'>
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo} />)
                }
            </div>
        </div>
    </>;
}
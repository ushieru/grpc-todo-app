export default function Todo({ todo }) {
    return <>
        <div className='flex items-center w-96 h-12 border-2 border-gray-900 rounded-md px-5 mb-1'>
            <div className='w-full'>
                <h1 className='overflow-ellipsis'>{todo.text}</h1>
            </div>
            <div className='ml-2'>
                <button className='bg-red-500 text-white font-semibold px-2 py-1 rounded-md ml-2'>Delete</button>
            </div>
        </div>
    </>;
}
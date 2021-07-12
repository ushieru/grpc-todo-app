const API = process.env.REACT_APP_API || 'http://192.168.100.3:3333/';

export const readTodos = () => {
    return new Promise(resolve =>
        fetch(API + 'todos')
            .then(response => response.json())
            .then(data => data.itemsList)
            .then(resolve)
    );
}

/**
 * @param {string} text 
 * @returns {Promise}
 */
export const createTodo = (text) => {
    return fetch(API + 'todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
        .then(response => response.json());
}
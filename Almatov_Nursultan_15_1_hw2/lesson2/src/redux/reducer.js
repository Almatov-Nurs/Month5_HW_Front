const initialState = {
    todos: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return { ...state, todos: [...state.todos, action.payload] }
        }
        case "DELETE_TODO": {
            return { ...state, todos: state.todos.filter((todo)=>{
                return todo.id !== action.payload;
            }) }
        }
        case "DELETE": {
            return state = {todos:[]}
        }
        default: {
            return state;
        }
    }
}

export default reducer;
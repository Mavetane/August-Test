const { ADD_USER, ADD_TODO } = require("../actions/actionTypes")

const initialState = {
  users: [],
  todos: []
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const newState = { users: [...state.users, action.payload] }
      console.log("state", newState)
      return newState
    }
    case ADD_TODO: {
      const newTodo = { todos: [...state.todos, action.payload] }
      return newTodo;
    }
    default: {
      return state
    }
  }
}

export default rootReducer;
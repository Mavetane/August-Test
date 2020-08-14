const { ADD_USER } = require("../actions/actionTypes")

const initialState = {
  users: []
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const newState = { users: [...state.users, action.payload] }
      console.log("state", newState)
      return newState
    }
    default: {
      return state
    }
  }
}

export default rootReducer;
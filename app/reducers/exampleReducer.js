import { ACTION_TYPE } from '../store'

const exampleReducer = (state = {}, action ) => {
  switch (action.type) {

    case ACTION_TYPE :
      return {...state, examples: action.data}
    default:
      return state
  }
}

export default exampleReducer

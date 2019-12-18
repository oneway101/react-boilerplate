import { createStore, applyMiddleware } from 'redux';
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk


// Action Type
export const ACTION_TYPE = 'ACTION_TYPE'

// Action Creator
const actionCreator = (data) => ({
  type: ACTION_TYPE,
  data
})

// Thunk Creator
export const thunkCreator = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(actionCreator(data))
    } catch(err) {
      console.log(err)
    }
  }
}


const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
)

export default store;

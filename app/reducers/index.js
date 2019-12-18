import {combineReducers} from 'redux'
import exampleReducer from './exampleReducer'

const rootReducer = combineReducers({
  examples : exampleReducer
})

export default rootReducer

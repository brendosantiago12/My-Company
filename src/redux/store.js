import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {allUsersReducer, femaleUsersReducer, maleUsersReducer} from './reducers/usersReducer'
import {UserReducer} from './reducers/userReducer'

const reducer = combineReducers({
    allUsers: allUsersReducer,
    femaleUsers: femaleUsersReducer,
    maleUsers: maleUsersReducer,
    singleUser: UserReducer,
})
const middlewares = [thunk]

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)
export default store;
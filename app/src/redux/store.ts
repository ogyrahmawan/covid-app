import {createStore,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import victimReducer from './reducers/victimReducers'

const rootReducer = combineReducers({
    victim: victimReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof rootReducer>

export default store
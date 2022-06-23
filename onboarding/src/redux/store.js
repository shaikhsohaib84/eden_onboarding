import { createStore } from 'redux'
import reducers from './reducer'

export const Store = createStore(
    reducers, // combined reducers
    {}, // initial state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // react devtool access
)
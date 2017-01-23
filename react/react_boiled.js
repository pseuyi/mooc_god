// example of a store using combine reducers
import { createStore } from 'redux';
import rootReducer from './reducer';
export default createStore(rootReducer);

// example of store with thunk and logging middleware
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);
const store = createStore(rootReducer, middleware);
export default store;

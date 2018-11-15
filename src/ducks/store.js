import { createStore } from 'redux';
import scaleReducer from './scaleReducer';

const store = createStore(
    scaleReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
export default store;
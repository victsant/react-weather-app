import {
     applyMiddleware,
     createStore,
     compose
} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(reducer);

export default store;

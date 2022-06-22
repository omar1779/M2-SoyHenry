import { createStore} from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
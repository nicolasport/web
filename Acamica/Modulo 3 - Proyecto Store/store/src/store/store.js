import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// store.js
export function configureStore(initialState = {}) {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}

export const store = configureStore();

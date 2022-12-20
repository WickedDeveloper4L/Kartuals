import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

import rootReducer from "./root.reducer";

const middlewares = [thunk]

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)

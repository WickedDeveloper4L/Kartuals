import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { shopReducer } from "./shop/shop.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)
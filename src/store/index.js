import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import orderReducer from './slices/orderSlice';
import itemsReducer from './slices/itemsSlice';


const reducers = combineReducers({
  order: orderReducer,
  items: itemsReducer,
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
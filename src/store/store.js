import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import reducer from './reducers';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import rootLogics from './logic';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(persistedReducer, applyMiddleware(createLogicMiddleware(rootLogics)))
export const persistor = persistStore(store)

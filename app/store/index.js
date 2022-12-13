import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {api} from '../services/API';
import login from '../store/LoginSlice';

const reducers = combineReducers({
  login,

});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   whitelist: ['auth'],
  //   blacklist: ['routsDetails', 'utilSlice'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);
    return middlewares;
  },
});

const persistor = persistStore(store);

export {store, persistor};
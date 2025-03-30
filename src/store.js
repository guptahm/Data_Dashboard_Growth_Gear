// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './Slice/querySlice';

 const store = configureStore({
  reducer: {
    query: queryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['query.results']
      }
    })
});

export default store;
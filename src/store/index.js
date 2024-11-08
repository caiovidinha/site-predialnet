// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../reducers/modalReducer';

// Configure the store with the reducer
const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;

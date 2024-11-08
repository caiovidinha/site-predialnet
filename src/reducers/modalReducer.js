// src/reducers/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  selectedPlan: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
  },
});

// Export the actions to be used in components
export const { setModalOpen, setSelectedPlan } = modalSlice.actions;

// Export the reducer to be used in the store
export default modalSlice.reducer;

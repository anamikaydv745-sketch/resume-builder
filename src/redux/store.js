import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resumeSlice'; // Import the reducer from the slice

// Set up the Redux store with the resume reducer
const store = configureStore({
  reducer: {
    resume: resumeReducer, // This tells Redux how to handle state changes for 'resume'
  },
});

export default store;

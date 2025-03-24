import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resumeSlice'; 
import { loadState, saveState } from '../utils/localStorage';


const preloadedState = {
  resume: loadState()
};

const store = configureStore({
  reducer: {
    resume: resumeReducer, 
  },
  preloadedState
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state.resume);
});

export default store;

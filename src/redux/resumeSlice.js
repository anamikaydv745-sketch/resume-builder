import { createSlice } from '@reduxjs/toolkit';

// Initial state of the resume sections
const initialState = {
  sections: [],
};

// Create the slice with auto-generated actions and reducers
const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    addSection: (state, action) => {
      state.sections.push(action.payload); // Add a new section to the array
    },
  },
});

// Export the action and reducer
export const { addSection } = resumeSlice.actions;
export default resumeSlice.reducer;

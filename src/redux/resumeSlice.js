import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  basicDetails: {
    name: "",
    email: "",
    objective: "",
    phone: "",
    website: "",
    location: ""
  },
  workExperience: [],
  education: [],
  projects: [],
  skills: [],
  uiState: { selectedSection: null },
  lastSaved: "",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setBasicDetails: (state, action) => {
      state.basicDetails = action.payload;
    },
    setWorkExperience: (state, action) => {
      state.workExperience.push(action.payload);
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    updateSectionOrder: (state, action) => {
      const { section, newOrder } = action.payload;
      state[section] = newOrder; // Reorders sections
    },
    setLastSaved: (state, action) => {
      state.lastSaved = action.payload;
    },
  },
});

export const {
  setBasicDetails,
  setWorkExperience,
  setEducation,
  setProjects,
  setSkills,
  updateSectionOrder,
  setLastSaved
} = resumeSlice.actions;

export default resumeSlice.reducer;

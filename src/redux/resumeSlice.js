import { createSlice } from "@reduxjs/toolkit";
import { FORM_OBJECTS } from "../utils/formObjects";

// Helper to generate unique IDs
const generateId = () => {
  return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 7)}`;
};

const initialState = {
  basicDetails: {
    name: "",
    email: "",
    objective: "",
    phone: "",
    website: "",
    location: "",
  },

  workExperience: [
    {
      id: generateId(),
      ...FORM_OBJECTS["workExperience"]
    }
  ],
  education: [
    {
      id: generateId(),
      ...FORM_OBJECTS["education"]
    }
  ],
  projects: [
    {
      id: generateId(),
      ...FORM_OBJECTS["projects"]
    }
  ],
  skills: [],

  uiState: {
    sectionOrder: ["workExperience", "education", "projects", "skills"],
    sectionVisibility: {
      workExperience: true,
      education: true,
      projects: true,
      skills: true,
    },
    sectionTitles: {
      workExperience: "Work Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
    },
  },
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    // Basic Details
    setBasicDetails: (state, action) => {
      state.basicDetails = action.payload;
    },

    addEntry: (state, action) => {
      const sectionKey = action.payload;
      const entry = { ...FORM_OBJECTS[sectionKey], id: generateId() };
      state[sectionKey].push(entry);
    },
    removeEntry: (state, action) => {
      const { sectionKey, id } = action.payload;
      state[sectionKey] = state[sectionKey].filter((item) => item.id !== id);
    },
    updateEntry: (state, action) => {
      const { sectionKey, id, updatedData } = action.payload;
      const entry = state[sectionKey].find((item) => item.id === id);
      if (entry) Object.assign(entry, updatedData);
    },

    moveEntryUp: (state, action) => {
      const { sectionKey, index } = action.payload;
      const section = state[sectionKey];
      if (index > 0) {
        const temp = section[index - 1];
        section[index - 1] = section[index];
        section[index] = temp;
      }
    },
    
    moveEntryDown: (state, action) => {
      const { sectionKey, index } = action.payload;
      const section = state[sectionKey];
      if (index < section.length - 1) {
        const temp = section[index + 1];
        section[index + 1] = section[index];
        section[index] = temp;
      }
    },

    // Skills
    setSkills: (state, action) => {
      state.skills = action.payload;
    },

    // UI Control
    moveSectionUp: (state, action) => {
      const sectionKey = action.payload;
      const index = state.uiState.sectionOrder.indexOf(sectionKey);
      if (index > 0) {
        const temp = state.uiState.sectionOrder[index - 1];
        state.uiState.sectionOrder[index - 1] = sectionKey;
        state.uiState.sectionOrder[index] = temp;
      }
    },
    moveSectionDown: (state, action) => {
      const sectionKey = action.payload;
      const index = state.uiState.sectionOrder.indexOf(sectionKey);
      if (index < state.uiState.sectionOrder.length - 1) {
        const temp = state.uiState.sectionOrder[index + 1];
        state.uiState.sectionOrder[index + 1] = sectionKey;
        state.uiState.sectionOrder[index] = temp;
      }
    },
    toggleSectionVisibility: (state, action) => {
      const section = action.payload;
      state.uiState.sectionVisibility[section] = !state.uiState.sectionVisibility[section];
    },

    updateSectionTitle: (state, action) => {
      const { sectionKey, title } = action.payload;
      state.uiState.sectionTitles[sectionKey] = title;
    },

    setLastSaved: (state, action) => {
      state.lastSaved = action.payload;
    },
  },
});

export const {
  setBasicDetails,
  addEntry,
  removeEntry,
  updateEntry,
  moveEntryUp,
  moveEntryDown,
  setSkills,
  moveSectionUp,
  moveSectionDown,
  toggleSectionVisibility,
  updateSectionTitle,
  setLastSaved,
} = resumeSlice.actions;

export default resumeSlice.reducer;

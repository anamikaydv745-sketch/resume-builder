import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Basic Details Section
  basicDetails: {
    name: "",
    email: "",
    objective: "",
    phone: "",
    website: "",
    location: "",
  },

  // Work Experience (Array of Job Entries)
  workExperience: [
    /*
    {
      id: 1,
      jobTitle: "Frontend Engineer",
      company: "Google",
      location: "Mountain View, CA",
      startDate: "Jan 2022",
      endDate: "Present",
      description: ["Developed core UI components", "Optimized React performance"],
    }
    */
  ],

  // Education (Array of Degree Entries)
  education: [
    /*
    {
      id: 1,
      school: "MIT",
      degree: "Bachelor of Computer Science",
      major: "Computer Science",
      location: "Massachusetts, USA",
      startDate: "2018",
      endDate: "2022",
      gpa: "3.9",
      additionalInfo: "Graduated with Honors",
    }
    */
  ],

  // Projects (Array of Project Entries)
  projects: [
    /*
    {
      id: 1,
      name: "Resume Builder",
      description: ["Built a drag-and-drop resume editor", "Integrated Redux for state management"],
      techStack: ["React", "Redux", "Tailwind CSS"],
      link: "https://github.com/your-repo",
    }
    */
  ],

  // Skills (Array of Strings)
  skills: [
    /*
    "React", "Redux", "JavaScript", "TypeScript", "GraphQL"
    */
  ],

  // Section Order (Manages Reordering of Sections in the UI)
  uiState: {
    selectedSection: null,
    sectionOrder: ["workExperience", "education", "projects", "skills"],
    sectionVisibility: {
      workExperience: true,
      education: true,
      projects: true,
      skills: true
    }
  },

  lastSaved: "",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    // Basic Details
    setBasicDetails: (state, action) => {
      state.basicDetails = action.payload;
    },

    // Work Experience CRUD
    addWorkExperience: (state, action) => {
      state.workExperience.push({ id: state.workExperience.length + 1, ...action.payload });
    },
    updateWorkExperience: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.workExperience.findIndex((item) => item.id === id);
      if (index !== -1) state.workExperience[index] = { ...state.workExperience[index], ...updatedData };
    },
    removeWorkExperience: (state, action) => {
      state.workExperience = state.workExperience.filter(item => item.id !== action.payload);
    },

    // Education CRUD
    addEducation: (state, action) => {
      state.education.push({ id: state.education.length + 1, ...action.payload });
    },
    updateEducation: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.education.findIndex((item) => item.id === id);
      if (index !== -1) state.education[index] = { ...state.education[index], ...updatedData };
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter(item => item.id !== action.payload);
    },

    // Projects CRUD
    addProject: (state, action) => {
      state.projects.push({ id: state.projects.length + 1, ...action.payload });
    },
    updateProject: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.projects.findIndex((item) => item.id === id);
      if (index !== -1) state.projects[index] = { ...state.projects[index], ...updatedData };
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(item => item.id !== action.payload);
    },

    // Skills Management
    setSkills: (state, action) => {
      state.skills = action.payload;
    },

    // Section Ordering (Move Sections Up/Down)
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

    setLastSaved: (state, action) => {
      state.lastSaved = action.payload;
    },
  },
});

export const {
  setBasicDetails,
  addWorkExperience,
  updateWorkExperience,
  removeWorkExperience,
  addEducation,
  updateEducation,
  removeEducation,
  addProject,
  updateProject,
  removeProject,
  setSkills,
  moveSectionUp,
  moveSectionDown,
  toggleSectionVisibility,
  setLastSaved,
} = resumeSlice.actions;

export default resumeSlice.reducer;

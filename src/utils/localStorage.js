// Save state to localStorage
export const saveState = (state) => {
    try {
      const serialized = JSON.stringify(state);
      localStorage.setItem("resumeState", serialized);
    } catch (err) {
      console.error("Could not save state", err);
    }
  };
  
  // Load state from localStorage
  export const loadState = () => {
    try {
      const serialized = localStorage.getItem("resumeState");
      if (serialized === null) return undefined;
      return JSON.parse(serialized);
    } catch (err) {
      console.error("Could not load state", err);
      return undefined;
    }
  };
  
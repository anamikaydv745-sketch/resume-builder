// import { useDispatch } from "react-redux";
// import { addSection } from "./redux/resumeSlice";

import { Route, Routes } from "react-router";
import { Landing } from "./pages/Landing";
import { Editor } from "./pages/Editor";

function App() {
  // const dispatch = useDispatch();

  // const handleAddSection = () => {
  //   const newSection = {
  //     id: Date.now(), // Generate a unique ID for each section
  //     name: 'Work Experience',
  //     content: 'Details of work experience...',
  //   };
  //   dispatch(addSection(newSection));
  // }

  return (
    // <div>
    //   <h1>Dynamic Resume Builder</h1>
    //   <button onClick={handleAddSection}>Add Section</button>
    // </div>
    <Routes>
      <Route path="/" element={ <Landing />}/>
      <Route path="/editor" element={ <Editor />}/>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import { Landing } from "./pages/Landing";
import { Builder } from "./pages/Builder";
import './App.css';
import { Preview } from "./pages/Preview";

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Landing />}/>
      <Route path="/builder" element={ <Builder />}/>
      <Route path="/preview" element={ <Preview />}/>
    </Routes>
  );
}

export default App;

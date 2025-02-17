import { Route, Routes } from "react-router";
import { Landing } from "./pages/Landing";
import { Builder } from "./pages/Builder";
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Landing />}/>
      <Route path="/builder" element={ <Builder />}/>
    </Routes>
  );
}

export default App;

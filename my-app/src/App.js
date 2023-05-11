import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Landing from "./pages/Landing"
import About from "./pages/About"
import Project from "./pages/Project"
import Learning from "./pages/Learning"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing/>} />
          <Route path="about" element={<About/>} />
          <Route path="project" element={<Project/>} />
          <Route path="learning" element={<Learning/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

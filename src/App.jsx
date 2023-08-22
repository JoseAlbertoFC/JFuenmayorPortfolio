import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/home";
import Projects from "./views/projects/projects";
import Contact from "./views/contact/contact";
import Detail from "./views/detail/detail";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

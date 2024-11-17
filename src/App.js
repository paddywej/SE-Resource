import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About"; 
import HomePage from './pages/HomePage/HomePage';
import Program from "./pages/Program/Program";
import Event from "./pages/Event/Event";
import News from "./pages/News/News";
import Admission from "./pages/Admission/Admission";
import Admission2 from "./pages/Admission/Admission2";
import Register from "./components/Register/Register";
import File from "./pages/FileManagement/FileManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/event" element={<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission2" element={<Admission2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/file" element={<File />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About"; 
import HomePage from './pages/HomePage/Homepage';
import Program from "./pages/Program/Program";
import Glasgow from "./pages/Program/Glasgow";
import Queensland from "./pages/Program/Queensland";
import Exchange from "./pages/Program/Exchange";
import Internships from "./pages/Program/Internships";
import Event from "./pages/Event/Event";
import News from "./pages/News/News";
import Admission from "./pages/Admission/Admission";
import Register from "./components/Register/Register"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/glasgow" element={<Glasgow />} />
        <Route path="/queensland" element={<Queensland />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/event" element={<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

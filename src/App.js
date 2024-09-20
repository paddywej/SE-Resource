import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About"; 
import HomePage from "./pages/Homepage/homepage"; 
import Program from "./pages/Program/Program";
import Event from "./pages/Event/Event";
import News from "./pages/News/News";
import Admission from "./pages/Admission/Admission";

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
      </Routes>
    </Router>
  );
}

export default App;

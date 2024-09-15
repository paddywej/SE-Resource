import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About"; // Adjust the path if necessary
import HomePage from "./pages/HomePage/homepage"; // or wherever your home page is

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

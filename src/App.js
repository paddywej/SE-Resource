import React, { useState } from "react"; // Import useState from React
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import About from "./pages/About/About"; 
import HomePage from './pages/HomePage/HomePage';
import Program from "./pages/Program/Program";
import Event from "./pages/Event/Event";
import News from "./pages/News/News";
import Admission from "./pages/Admission/Admission";
import Admission2 from "./pages/Admission/Admission2";
import Register from "./components/Register/Register";
import File from "./pages/FileManagement/FileManagement";
import Login from "./components/Login/Login"; // Make sure to import Login

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Define loggedIn and setLoggedIn here
  const [username, setUsername] = useState(""); // Define username and setUsername here
  const [showLogin, setShowLogin] = useState(false); // Handle login modal visibility
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  const handleLoginClose = () => setShowLogin(false); // Close login modal

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              showLogin={showLogin}
              handleLoginClose={handleLoginClose}
              setLoggedIn={setLoggedIn}
              setUsername={setUsername}
              navigate={navigate} // Pass navigate as a prop to Login component
            />
          }
        />
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

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About"; 
import HomePage from './pages/HomePage/HomePage';
import HomePage2 from './pages/HomePage/HomePage2';
import Program from "./pages/Program/Program";
import Glasgow from "./pages/Program/Glasgow";
import Queensland from "./pages/Program/Queensland";
import Exchange from "./pages/Program/Exchange";
import Internships from "./pages/Program/Internships";
import Event from "./pages/Event/Event";
import News from "./pages/News/News";
import Admission from "./pages/Admission/Admission";
import Admission2 from "./pages/Admission/Admission2";
import Register from "./components/Register/Register";
import File from "./pages/FileManagement/FileManagement";
import Login from "./components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showArchive, setShowArchive] = useState(false);

  const handleLoginClose = () => setShowLogin(false);

  // Pass these props to HomePage and other components that need them
  const loginProps = {
    loggedIn,
    setLoggedIn,
    username,
    setUsername,
    showLogin,
    setShowLogin,
    showArchive,
    setShowArchive,
    handleLoginClose
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage {...loginProps} />} />
      <Route path="/about" element={<About {...loginProps} />} />
      <Route path="/program" element={<Program />} />
      <Route path="/glasgow" element={<Glasgow />} />
      <Route path="/queensland" element={<Queensland />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/event" element={<Event {...loginProps} />} />
      <Route path="/news" element={<News {...loginProps} />} />
      <Route path="/admission" element={<Admission {...loginProps} />} />
      <Route path="/admission2" element={<Admission2 {...loginProps} />} />
      <Route path="/register" element={<Register {...loginProps} />} />
      <Route path="/file" element={<File {...loginProps} />} />
      <Route path="/homepage2" element={<HomePage2 {...loginProps} />} />
    </Routes>
  );
}

export default App;
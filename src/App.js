import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; // No BrowserRouter here
import { UserProvider } from "./context/UserContext"; // Import UserProvider
import About from "./pages/About/About"; 
import HomePage from "./pages/HomePage/HomePage";
import Program from "./pages/Program/Program";
import Glasgow from "./pages/Program/Glasgow";
import Queensland from "./pages/Program/Queensland";
import Exchange from "./pages/Program/Exchange";
import Internships from "./pages/Program/Internships";
import Event from "./pages/Event/Event";
import Event1 from "./pages/Event/Event1";
import Event2 from "./pages/Event/Event2";
import Event3 from "./pages/Event/Event3";
import Event4 from "./pages/Event/Event4";
import Event5 from "./pages/Event/Event5";
import Event6 from "./pages/Event/Event6";
import News from "./pages/News/News";
import Admission from "./pages/Admission/Admission";
import Admission2 from "./pages/Admission/Admission2";
import Register from "./components/Register/Register";
import File1 from "./pages/FileManagement/File1";
import File2 from "./pages/FileManagement/File2";
import File3 from "./pages/FileManagement/File3";
import File4 from "./pages/FileManagement/File4";
import File5 from "./pages/FileManagement/File5";
import File6 from "./pages/FileManagement/File6";
import File7 from "./pages/FileManagement/File7";
import File8 from "./pages/FileManagement/File8";
import Login from "./components/Login/Login";
import Archive from  "./pages/Archive/Archive"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);  
  const [username, setUsername] = useState(""); 
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const loginProps = { loggedIn, username, setLoggedIn, setUsername };

  return (
    <UserProvider> {/* Wrap the entire app with UserProvider */}
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              showLogin={showLogin}
              handleLoginClose={handleLoginClose}
              setLoggedIn={setLoggedIn}
              setUsername={setUsername}
            />
          }
        />
        <Route path="/" element={<HomePage {...loginProps} />} />
        <Route path="/about" element={<About {...loginProps} />} />
        <Route path="/program" element={<Program />} />
        <Route path="/glasgow" element={<Glasgow />} />
        <Route path="/queensland" element={<Queensland />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/events" element={<Event {...loginProps} />} />
        <Route path="/event1" element={<Event1 {...loginProps}/>} />
        <Route path="/event2" element={<Event2 {...loginProps}/>} />
        <Route path="/event3" element={<Event3 {...loginProps}/>} />
        <Route path="/event4" element={<Event4 {...loginProps}/>} />
        <Route path="/event5" element={<Event5 {...loginProps}/>} />
        <Route path="/event6" element={<Event6 {...loginProps}/>} />
        <Route path="/news" element={<News {...loginProps} />} />
        <Route path="/admission" element={<Admission {...loginProps} />} />
        <Route path="/admission2" element={<Admission2 {...loginProps} />} />
        <Route path="/register" element={<Register {...loginProps} />} />
        <Route path="/file1" element={<File1 {...loginProps} />} />
        <Route path="/file2" element={<File2 {...loginProps} />} />
        <Route path="/file3" element={<File3 {...loginProps} />} />
        <Route path="/file4" element={<File4 {...loginProps} />} />
        <Route path="/file5" element={<File5 {...loginProps} />} />
        <Route path="/file6" element={<File6 {...loginProps} />} />
        <Route path="/file7" element={<File7 {...loginProps} />} />
        <Route path="/file8" element={<File8 {...loginProps} />} />
        <Route path="/archive" element={<Archive {...loginProps} />} />
      </Routes>
    </UserProvider>
  );
}

export default App;

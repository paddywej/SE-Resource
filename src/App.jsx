import React from 'react';
import './App.css';
import Homepage from './pages/HomePage/HomePage';

function App() {
  const { loggedIn } = useContext(UserContext); // if error delete this and eveything in <Routes>
  return (
    <div className="App">
      <Homepage />
      <Routes>
        <Route path="/archive" element={loggedIn ? <Archive /> : <Navigate to="/" />}/> 
      </Routes> 
    </div>
    
  );
}

export default App;
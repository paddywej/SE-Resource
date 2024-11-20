import React, { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || "");
  const [userId, setUserId] = useState(localStorage.getItem('userId') || ""); // Add userId
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('username'));

  return (
    <UserContext.Provider value={{ username, setUsername, loggedIn, setLoggedIn, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};


export { UserContext, UserProvider };

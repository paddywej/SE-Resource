import React, { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || "");
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('username'));

  return (
    <UserContext.Provider value={{ username, setUsername, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

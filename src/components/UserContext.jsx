import { createContext, useState } from "react";
import { fetchAllUsers } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUsers, setCurrentUsers] = useState(null);

  fetchAllUsers()
    .then((users) => {
      setCurrentUsers(currentUsers);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <UserContext.Provider value={{ currentUsers, setCurrentUsers }}>
      {children}
    </UserContext.Provider>
  );
};

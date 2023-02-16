import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);
  const [users, setUsers] = useState([]);
  return (
    <UserContext.Provider
      value={{ roles, setRoles, currentRole, setCurrentRole, users, setUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

"use client";

import * as React from "react";

type role = "Operador" | "Cliente";

interface IUser {
  name: string;
  role: role;
  handleRole: () => void;
}

const UserContext = React.createContext<IUser>({
  role: "Operador",
  name: "",
  handleRole: () => {},
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = React.useState<string>("Bruno Azevedo");
  const [role, setRole] = React.useState<role>("Operador");

  const handleRole = () => {
    if (role === "Operador") setRole("Cliente");
    if (role === "Cliente") setRole("Operador");
    return;
  };

  return (
    <UserContext.Provider value={{ name, handleRole, role }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

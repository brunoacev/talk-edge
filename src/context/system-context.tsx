"use client";

import { ReactNode, useState, createContext } from "react";

type Navigation = "cliente" | "faturas" | "historico" | "chat" | "encerrar";

interface ISystemContext {
  navOption: Navigation;
  handleNav: (type: Navigation) => void;
}

const SystemContext = createContext<ISystemContext>({
  handleNav: () => {},
  navOption: "cliente",
});

function SystemProvider({ children }: { children: ReactNode }) {
  const [navOption, setNavOption] = useState<Navigation>("cliente");

  const handleNav = (type: Navigation) => {
    setNavOption(type);
  };

  return (
    <SystemContext.Provider value={{ handleNav, navOption }}>
      {children}
    </SystemContext.Provider>
  );
}

export { SystemProvider, SystemContext };

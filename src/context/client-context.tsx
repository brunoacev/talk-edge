"use client";

import * as React from "react";

type Options = "bills" | "history" | "chat" | "finish";

interface Client {
  option: Options;
  handleBills: () => void;
  handleHistory: () => void;
  handleChat: () => void;
  handleFinish: () => void;
}

const ClientContext = React.createContext<Client>({
  option: "bills",
  handleBills: () => {},
  handleHistory: () => {},
  handleChat: () => {},
  handleFinish: () => {},
});

function ClientProvider({ children }: { children: React.ReactNode }) {
  const [option, setOption] = React.useState<Options>("bills");

  const handleBills = () => {
    setOption("bills");
  };

  const handleHistory = () => {
    setOption("history");
  };

  const handleChat = () => {
    setOption("chat");
  };

  const handleFinish = () => {
    setOption("finish");
  };

  return (
    <ClientContext.Provider
      value={{ option, handleBills, handleChat, handleFinish, handleHistory }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export { ClientProvider, ClientContext };

"use client";

import * as React from "react";

type Options = "bills" | "history" | "chat" | "finish";

interface System {
  option: Options;
  handleBills: () => void;
  handleHistory: () => void;
  handleChat: () => void;
  handleFinish: () => void;
}

const SystemContext = React.createContext<System>({
  option: "bills",
  handleBills: () => {},
  handleHistory: () => {},
  handleChat: () => {},
  handleFinish: () => {},
});

function SystemProvider({ children }: { children: React.ReactNode }) {
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
    <SystemContext.Provider
      value={{ option, handleBills, handleChat, handleFinish, handleHistory }}
    >
      {children}
    </SystemContext.Provider>
  );
}

export { SystemProvider, SystemContext };

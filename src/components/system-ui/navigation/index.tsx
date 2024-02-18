"use client";

import { useContext } from "react";
import { NavigationButton } from "./navigation-button";
import { SystemContext } from "@/context/system-context";

export const SystemNavigation = () => {
  const { handleNav, navOption } = useContext(SystemContext);

  return (
    <div className="p-2 bg-zinc-200/50 dark:bg-gray-400/10 w-full h-fit rounded-md flex flex-wrap items-center gap-4 ">
      <NavigationButton
        name="cliente"
        onClick={() => handleNav("cliente")}
        active={navOption === "cliente"}
      />
      <NavigationButton
        name="faturas"
        onClick={() => handleNav("faturas")}
        active={navOption === "faturas"}
      />
      <NavigationButton
        name="historico"
        onClick={() => handleNav("historico")}
        active={navOption === "historico"}
      />
      <NavigationButton
        name="chat"
        onClick={() => handleNav("chat")}
        active={navOption === "chat"}
      />
      <NavigationButton
        name="encerrar"
        onClick={() => handleNav("encerrar")}
        active={navOption === "encerrar"}
      />
    </div>
  );
};

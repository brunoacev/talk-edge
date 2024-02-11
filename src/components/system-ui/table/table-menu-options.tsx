"use client";

import * as React from "react";
import { SystemContext } from "@/context/system-context";
import { cn } from "@/lib/utils";
import { ShowTableContent } from "./show-table-content";
import { getClient } from "@/lib/client";

export const TableMenuOptions = () => {
  const { option, handleBills, handleChat, handleFinish, handleHistory } =
    React.useContext(SystemContext);
  const clientData = getClient();

  const optionsArray = [
    { title: "bills", handle: handleBills, translateTitle: "Faturas" },
    { title: "history", handle: handleHistory, translateTitle: "Historico" },
    { title: "chat", handle: handleChat, translateTitle: "Chat" },
    {
      title: "finish",
      handle: handleFinish,
      translateTitle: "Encerrar Atendimento",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex gap-4 items-center border-b-2 py-2 dark:border-zinc-600 ">
        {optionsArray.map((item, idx) => (
          <button
            key={idx}
            onClick={item.handle}
            className={cn(
              "p-2 font-semibold text-sm tracking-wide capitalize border-2 rounded-md dark:border-zinc-600 hover:rounded-md hover:cursor-pointer dark:hover:bg-zinc-600/50 transition-all duration-300 ease-in-out",
              {
                ["dark:bg-zinc-600/50 rounded-md"]: option === item.title,
              }
            )}
          >
            {item.translateTitle}
          </button>
        ))}
      </div>

      <ShowTableContent option={option} clientData={clientData[0]} />
    </div>
  );
};

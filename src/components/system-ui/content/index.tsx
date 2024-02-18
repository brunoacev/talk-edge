"use client";

import { getClient } from "@/lib/getClient";
import { SystemUITable, SystemUIServices } from "./imports";
import { useContext } from "react";
import { SystemContext } from "@/context/system-context";

export const SystemContent = () => {
  const { navOption } = useContext(SystemContext);
  const { client, bills, history } = getClient();

  return (
    <div className="p-4 bg-zinc-200/50 dark:bg-zinc-700/50 w-full md:h-[420px] lg:h-[700px] rounded-md overflow-y-auto">
      {navOption === "cliente" && <SystemUITable.Client data={client} />}
      {navOption === "faturas" && <SystemUITable.Bills data={bills} />}
      {navOption === "historico" && <SystemUITable.History data={history} />}
      {navOption === "chat" && <SystemUIServices.Chat />}
      {navOption === "encerrar" && <SystemUIServices.Finish />}
    </div>
  );
};

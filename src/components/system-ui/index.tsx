"use client";

import { useContext, useState } from "react";
import { CaseButton } from "./new-ui/case-button";
import { CaseTable } from "./new-ui/case-table";
import { CaseClient } from "./new-ui/case-client";
import { CaseHistory } from "./new-ui/case-history";
import { SystemChat } from "./chat";
import { EndService } from "./end-service";
import { getClient } from "@/lib/getClient";
import { SystemContext } from "@/context/system-context";

export const SystemUI = () => {
  const { handleNav, navOption } = useContext(SystemContext);

  const { client, bills, history } = getClient();

  return (
    <section className="flex flex-col gap-2 h-full w-full">
      <div className="p-2 bg-zinc-200/50 dark:bg-gray-400/10 w-full h-fit rounded-md flex flex-wrap items-center gap-4 ">
        <CaseButton
          name="cliente"
          onClick={() => handleNav("cliente")}
          active={navOption === "cliente"}
        />
        <CaseButton
          name="faturas"
          onClick={() => handleNav("faturas")}
          active={navOption === "faturas"}
        />
        <CaseButton
          name="historico"
          onClick={() => handleNav("historico")}
          active={navOption === "historico"}
        />
        <CaseButton
          name="chat"
          onClick={() => handleNav("chat")}
          active={navOption === "chat"}
        />
        <CaseButton
          name="encerrar"
          onClick={() => handleNav("encerrar")}
          active={navOption === "encerrar"}
        />
      </div>

      <div className="p-4 bg-zinc-200/50 dark:bg-zinc-700/50 w-full md:h-[420px] lg:h-[700px] rounded-md overflow-y-auto">
        {navOption === "cliente" && <CaseClient data={client} />}
        {navOption === "faturas" && <CaseTable data={bills} />}
        {navOption === "historico" && <CaseHistory data={history} />}
        {navOption === "chat" && <SystemChat />}
        {navOption === "encerrar" && <EndService />}
      </div>
    </section>
  );
};

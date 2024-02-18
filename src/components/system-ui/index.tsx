"use client";

import { useState } from "react";
import { CaseButton } from "./new-ui/case-button";
import { CaseTable } from "./new-ui/case-table";
import { CaseClient } from "./new-ui/case-client";
import { CaseHistory } from "./new-ui/case-history";
import { SystemChat } from "./chat";
import { EndService } from "./end-service";
import { getClient } from "@/lib/getClient";

type Case = "cliente" | "faturas" | "historico" | "chat" | "encerrar";

export const SystemUI = () => {
  const [stateCase, setStateCase] = useState<Case>("cliente");

  const handleCase = (e: Case) => {
    setStateCase(e);
  };

  const { client, bills, history } = getClient();

  return (
    <section className="flex flex-col gap-2 h-full w-full">
      <div className="p-2 bg-zinc-200/50 dark:bg-gray-400/10 w-full h-fit rounded-md flex flex-wrap items-center gap-4 ">
        <CaseButton
          name="cliente"
          onClick={() => handleCase("cliente")}
          active={stateCase === "cliente"}
        />
        <CaseButton
          name="faturas"
          onClick={() => handleCase("faturas")}
          active={stateCase === "faturas"}
        />
        <CaseButton
          name="historico"
          onClick={() => handleCase("historico")}
          active={stateCase === "historico"}
        />
        <CaseButton
          name="chat"
          onClick={() => handleCase("chat")}
          active={stateCase === "chat"}
        />
        <CaseButton
          name="encerrar"
          onClick={() => handleCase("encerrar")}
          active={stateCase === "encerrar"}
        />
      </div>

      <div className="p-4 bg-zinc-200/50 dark:bg-zinc-700/50 w-full md:h-[420px] lg:h-[700px] rounded-md overflow-y-auto">
        {stateCase === "cliente" && <CaseClient data={client} />}
        {stateCase === "faturas" && <CaseTable data={bills} />}
        {stateCase === "historico" && <CaseHistory data={history} />}
        {stateCase === "chat" && <SystemChat />}
        {stateCase === "encerrar" && <EndService />}
      </div>
    </section>
  );
};

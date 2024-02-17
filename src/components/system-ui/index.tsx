"use client";

import { useState } from "react";
import { ShowTable } from "./table";
import { CaseButton } from "./new-ui/case-button";
import { CaseTable } from "./new-ui/case-table";
import { CaseClient } from "./new-ui/case-client";
import { CaseHistory } from "./new-ui/case-history";
import { SystemChat } from "./chat";
import { EndService } from "./end-service";

type Case = "cliente" | "faturas" | "historico" | "chat" | "encerrar";

export const SystemUI = () => {
  const [stateCase, setStateCase] = useState<Case>("cliente");

  const handleCase = (e: Case) => {
    setStateCase(e);
  };

  const dataBills = ["01", "02", "03"];
  const dataClient = {
    fullname: "Bruno Azevedo Moraes",
    id: "999.999.999-08",
    phone: "(85) 99999-8888",
    register: "FFFDDD-GGG05",
  };
  const dataHistory = [
    {
      operatorID: "Bruno Azevedo",
      title: "Promessa Pagamento",
      description:
        "Cliente confirma pagamento da fatura 10/05 para o dia 10/06/2022",
      date: "20/05/2022 - 14:35",
    },
    {
      operatorID: "Bruno Azevedo",
      title: "Promessa Pagamento",
      description:
        "Cliente confirma pagamento da fatura 10/05 para o dia 10/06/2022",
      date: "20/05/2022 - 14:35",
    },
    {
      operatorID: "Bruno Azevedo",
      title: "Promessa Pagamento",
      description:
        "Cliente confirma pagamento da fatura 10/05 para o dia 10/06/2022",
      date: "20/05/2022 - 14:35",
    },
  ];

  return (
    <section className="flex flex-col gap-2 h-full w-full">
      <div className="p-4 bg-zinc-200/50 dark:bg-zinc-700/50 w-full h-fit rounded-md flex flex-wrap items-center gap-4 ">
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
        {stateCase === "faturas" && <CaseTable data={dataBills} />}
        {stateCase === "cliente" && <CaseClient data={dataClient} />}
        {stateCase === "historico" && <CaseHistory data={dataHistory} />}
        {stateCase === "chat" && <SystemChat />}
        {stateCase === "encerrar" && <EndService />}
      </div>
    </section>
  );
};

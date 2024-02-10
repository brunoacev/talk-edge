import { Client } from "@/lib/client";

export const TableBils = ({ client }: { client: Client }) => {
  return (
    <div className="flex flex-col pr-4 gap-4 overflow-y-scroll h-[55vh] 2xl:h-[68vh]">
      {client.bills?.map((bill, idx) => (
        <div
          key={idx}
          className="border-2 p-1 rounded-md dark:border-zinc-600 border-zinc-400 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
        >
          <span className="border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            Numero: {bill.id}
          </span>
          <span className="border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            Valor Original: R$: {bill.originalValue}
          </span>
          <span className="border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            Valor Atualizado R$: {bill.updateValue}
          </span>
          <span className="border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            Data Vencimento: {bill.dueDate}
          </span>
          <span className="border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            Status: {bill.status}
          </span>
        </div>
      ))}
    </div>
  );
};

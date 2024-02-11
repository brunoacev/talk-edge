import { ClientBillsType } from "@/lib/client";

export const TableContentBills = ({ data }: { data: ClientBillsType[] }) => {
  return (
    <div className="flex flex-col pr-4 gap-4 overflow-y-scroll h-[52vh] 2xl:h-[68vh] p-2">
      {data.map((bill, idx) => (
        <div
          key={idx}
          className="border-2 p-1 rounded-md dark:border-zinc-600 border-zinc-400 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
        >
          <div className="flex flex-col gap-1 border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            <span>Numero:</span>
            <span> {bill.id}</span>
          </div>
          <div className="flex flex-col gap-1 border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            <span>Valor Original:</span>
            <span>R$: {bill.originalValue}</span>
          </div>
          <div className="flex flex-col gap-1 border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            <span>Valor Atualizado</span>
            <span>R$: {bill.updateValue}</span>
          </div>
          <div className="flex flex-col gap-1 border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            <span>Data Vencimento:</span>
            <span>{bill.dueDate}</span>
          </div>
          <div className="flex flex-col gap-1 border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            <span>Status:</span>
            <span>{bill.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

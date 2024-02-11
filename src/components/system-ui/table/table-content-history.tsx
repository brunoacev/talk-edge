import { ClientHistoryType } from "@/lib/client";

export const TableContentHistory = ({
  data,
}: {
  data: ClientHistoryType[];
}) => {
  return (
    <div className="flex flex-col pr-4 gap-4 overflow-y-scroll h-[52vh] 2xl:h-[68vh] p-2">
      {data.map((history, idx) => (
        <div
          key={idx}
          className="border-2 p-1 rounded-md dark:border-zinc-600 border-zinc-400 flex gap-2"
        >
          <div className="flex flex-col gap-1 w-full h-full items-start justify-start border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            <span>Descrição:</span>
            <span className="font-semibold tracking-wide">
              {history.description}
            </span>
          </div>
          <div className="flex flex-col gap-1 w-full max-w-64 items-end h-full border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            <span>Operador:</span>
            <span>{history.operator}</span>
          </div>
          <div className="flex flex-col gap-1 w-full max-w-64 items-end h-full border text-sm font-semibold dark:border-zinc-600 border-zinc-400 px-2 py-1">
            <span>Data:</span>
            <div>
              <span>{history.createAt.split("-")[0]}</span>
              <span>{history.createAt.split("-")[1]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

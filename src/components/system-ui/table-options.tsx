import { cn } from "@/lib/utils";

type TableOption = {
  option: string;
  handleBills: () => void;
  handleHistory: () => void;
  handleChat: () => void;
  handleFinish: () => void;
};

export const TableOptions = ({
  option,
  handleBills,
  handleChat,
  handleFinish,
  handleHistory,
}: TableOption) => {
  return (
    <div className="flex gap-4 items-center">
      <span
        onClick={handleBills}
        className={cn(
          "p-2 font-semibold text-sm tracking-wide rounded-md hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out",
          {
            ["bg-blue-500 "]: option === "bills",
          }
        )}
      >
        Faturas
      </span>
      <span
        onClick={handleHistory}
        className={cn(
          "p-2 font-semibold text-sm tracking-wide rounded-md hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out",
          {
            ["bg-blue-500 "]: option === "history",
          }
        )}
      >
        Historico
      </span>
      <span
        onClick={handleChat}
        className={cn(
          "p-2 font-semibold text-sm tracking-wide rounded-md hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out",
          {
            ["bg-blue-500 "]: option === "chat",
          }
        )}
      >
        Chat
      </span>
      <span
        onClick={handleFinish}
        className={cn(
          "p-2 font-semibold text-sm tracking-wide rounded-md hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out",
          {
            ["bg-blue-500 "]: option === "finish",
          }
        )}
      >
        Encerrar
      </span>
    </div>
  );
};

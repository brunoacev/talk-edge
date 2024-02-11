import { Label } from "@/components/base-ui/label";

export const EndService = () => {
  return (
    <div className="h-full w-full p-2 grid grid-cols-2 gap-4 rounded-md border-2 dark:border-zinc-600">
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="flex flex-col gap-2 h-full w-full">
          <Label htmlFor="description">Descreva seu atendimento:</Label>
          <textarea
            name="description"
            id="description"
            className="w-full h-full rounded-md dark:bg-zinc-700"
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <select
            id="option"
            required
            className="border w-full max-w-xs dark:border-zinc-600 text-gray-900 hover:cursor-pointer text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-zinc-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Selecione uma opção</option>
            <option value="US">Acordo avista</option>
            <option value="CA">Acordo parcelado</option>
            <option value="FR">Pagamento por fatura</option>
            <option value="DE">Desconhece o titular</option>
            <option value="DE">Recado</option>
          </select>
          <button className="border dark:border-zinc-600 p-2.5 rounded-md w-full dark:bg-zinc-700 hover:dark:bg-zinc-600 transition-all duration-300 ease-in-out">
            Encerrar Atendimento
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full w-full justify-around lg:justify-normal">
        <span className="font-semibold tracking-wide">
          Detalhamento do seu atendimento
        </span>
        <div className="flex flex-col gap-1 border-2 dark:border-zinc-600 rounded-md p-2">
          <span>Operador:</span>
          <span>brunoacev</span>
        </div>
        <div className="flex flex-col gap-1 border-2 dark:border-zinc-600 rounded-md p-2">
          <span>Descrição:</span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            quo?
          </span>
        </div>
        <div className="flex flex-col gap-1 border-2 dark:border-zinc-600 rounded-md p-2">
          <span>Tipo:</span>
          <span>Acordo Parcelado</span>
        </div>
      </div>
    </div>
  );
};

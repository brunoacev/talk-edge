import { Paperclip, Send } from "lucide-react";

export const InputMessage = () => {
  return (
    <div className="h-fit w-full flex gap-4 justify-between items-center dark:bg-zinc-600/40 p-2 rounded-md">
      <input
        type="text"
        className="w-full h-full px-2 rounded-md bg-transparent"
        placeholder="Digite sua mensagem..."
      />
      <div className="flex gap-2 items-center">
        <div className="bg-zinc-600/70 p-2 rounded-md hover:cursor-pointer dark:hover:bg-zinc-500/90 transition-all duration-300 ease-in-out">
          <Paperclip size={17} />
        </div>
        <div className="bg-zinc-600/70 p-2 rounded-md hover:cursor-pointer dark:hover:bg-zinc-500/90 transition-all duration-300 ease-in-out">
          <Send size={17} />
        </div>
      </div>
    </div>
  );
};

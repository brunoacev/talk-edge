import { Paperclip, Send, SendHorizonal } from "lucide-react";
import Image from "next/image";

export const ChatClient = () => {
  return (
    <div className="w-full h-full flex gap-2">
      <div className="dark:bg-zinc-600/20 border-2 dark:border-zinc-600 rounded-md shadow-lg w-full h-full max-w-2xl flex flex-col gap-4 p-2">
        <div className="h-full w-full flex flex-col-reverse gap-4">
          {/* Chat 1 */}
          <div className="flex gap-2 items-start justify-end ">
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center justify-end text-sm font-semibold tracking-wide">
                <span>12:42</span>
                <span>Bruno Azevedo</span>
              </div>
              <p className="p-2 rounded-md dark:bg-blue-400 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                eos.
              </p>
            </div>
            <Image
              alt=""
              src={"/svgs/male-avatar.svg"}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          {/* Chat 2 */}
          <div className="flex gap-2 items-start">
            <Image
              alt=""
              src={"/svgs/female-avatar.svg"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center text-sm font-semibold tracking-wide">
                <span>Amanda Ferreira</span>
                <span>12:37</span>
              </div>
              <p className="p-2 rounded-md dark:bg-blue-400/20 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                eos.
              </p>
            </div>
          </div>
        </div>
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
      </div>
      <div className="w-full max-w-md h-full dark:bg-zinc-700/50 shadow-lg rounded-md">
        <div className="flex flex-col gap-4 w-full p-2">
          <span>Ultimos Registros</span>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 place-items-center gap-2 text-sm border-2 dark:border-zinc-600 p-2 rounded-md hover:cursor-pointer dark:hover:bg-zinc-600 transition-all duration-300 ease-in-out">
              <div className="flex gap-1 items-start">
                <Image
                  alt=""
                  src={"/svgs/female-avatar.svg"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Amanda Ferreira</span>
                  <span className="font-light">
                    Lorem ipsum dolor sit amet...
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1 items-end w-full">
                <span className="font-semibold">12:37</span>
                <span className="w-5 h-5 text-center font-semibold bg-purple-700 rounded-full">
                  3
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 place-items-center gap-2 text-sm border-2 dark:border-zinc-600 p-2 rounded-md hover:cursor-pointer dark:hover:bg-zinc-600 transition-all duration-300 ease-in-out">
              <div className="flex gap-1 items-start">
                <Image
                  alt=""
                  src={"/svgs/male-avatar.svg"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Ricardo Muniz</span>
                  <span className="font-light">
                    Lorem ipsum dolor sit amet...
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1 items-end w-full">
                <span className="font-semibold">11:25</span>
                <span className="w-5 h-5 text-center font-semibold bg-purple-700 rounded-full">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

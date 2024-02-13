import { cn } from "@/lib/utils";
import Image from "next/image";

type ChatMessateType = {
  name: string;
  message: string;
  date: string;
  urlAvatar: string;
  position: "start" | "end";
};

export const ChatMessage = ({
  date,
  message,
  name,
  urlAvatar,
  position,
}: ChatMessateType) => {
  if (position === "end") {
    return (
      <div className={cn("flex gap-2 items-start justify-end")}>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center justify-end text-sm font-semibold tracking-wide">
            <span>{date}</span>
            <span>{name}</span>
          </div>
          <p className="p-2 text-sm rounded-md dark:bg-blue-400/20 bg-zinc-300 tracking-wide">
            {message}
          </p>
        </div>
        <Image
          alt="Imagem de um avatar circular"
          src={urlAvatar}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    );
  }

  if (position === "start") {
    return (
      <div className={cn("flex gap-2 items-start justify-start")}>
        <Image
          alt="Imagem de um avatar circular"
          src={urlAvatar}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-sm font-semibold tracking-wide">
            <span>{name}</span>
            <span>{date}</span>
          </div>
          <p className="p-2 text-sm rounded-md dark:bg-blue-400/20 bg-zinc-300 tracking-wide">
            {message}
          </p>
        </div>
      </div>
    );
  }

  return <div>No Content...</div>;
};

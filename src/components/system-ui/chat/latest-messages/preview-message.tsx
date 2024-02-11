import Image from "next/image";

type PreviewMessageType = {
  name: string;
  shortDescription: string;
  time: string;
  qtdMessages: number;
  urlAvatar: string;
};

export const PreviewMessage = ({
  name,
  qtdMessages,
  shortDescription,
  time,
  urlAvatar,
}: PreviewMessageType) => {
  return (
    <div className="w-full flex gap-2 justify-between text-sm border-2 dark:border-zinc-600 p-2 rounded-md hover:cursor-pointer dark:hover:bg-zinc-600 transition-all duration-300 ease-in-out">
      <div className="flex gap-1 items-center w-full">
        <Image
          alt="Imagem de avatar circular"
          src={urlAvatar}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex items-center gap-4">
          <span className="font-semibold">{name}</span>
          <span className="font-light">{shortDescription}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-end w-fit">
        <span className="font-semibold">{time}</span>
        <span className="w-5 h-5 text-center font-semibold bg-purple-700 rounded-full">
          {qtdMessages}
        </span>
      </div>
    </div>
  );
};

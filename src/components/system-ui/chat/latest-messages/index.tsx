import { PreviewMessage } from "./preview-message";

export const LatestMessages = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-2 border-2 dark:border-zinc-600 h-full dark:bg-zinc-700/50 shadow-lg rounded-md">
      <span className="font-semibold tracking-wide text-md">
        Últimas Mensagens
      </span>

      <div className="flex flex-col gap-4">
        <PreviewMessage
          name="Amanda Ferreira"
          qtdMessages={5}
          shortDescription="Preciso de um comprovan..."
          time="15:34"
          urlAvatar="/svgs/female-avatar.svg"
        />
        <PreviewMessage
          name="Eduardo Moreira"
          qtdMessages={8}
          shortDescription="Estava verificano isso co..."
          time="11:34"
          urlAvatar="/svgs/male-avatar.svg"
        />
      </div>
    </div>
  );
};

import { InputMessage } from "./input-message";
import { ChatMessage } from "./chat-message";

export const OnlineChat = () => {
  return (
    <div className="dark:bg-zinc-600/20 border-2 dark:border-zinc-600 rounded-md shadow-lg w-full h-full  max-w-2xl flex flex-col gap-4 p-2">
      <div className="h-full w-full flex flex-col-reverse gap-4">
        <ChatMessage
          date="12:37"
          message="000-BGRT-04"
          name="Amanda Ferreira"
          position="start"
          urlAvatar="/svgs/female-avatar.svg"
        />
        <ChatMessage
          date="12:37"
          message="Olá Boa tarde, por favor me informe seu numero de contrato."
          name="Bruno Azevedo"
          position="end"
          urlAvatar="/svgs/male-avatar.svg"
        />
        <ChatMessage
          date="12:37"
          message="Olá Boa tarde, quero um atendimento para revisar minhas faturas."
          name="Amanda Ferreira"
          position="start"
          urlAvatar="/svgs/female-avatar.svg"
        />
      </div>

      <InputMessage />
    </div>
  );
};

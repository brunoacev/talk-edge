import { LatestMessages } from "./latest-messages";
import { OnlineChat } from "./online-chat";

export const SystemChat = () => {
  return (
    <div className="w-full h-fit lg:h-full flex gap-2 justify-between">
      <OnlineChat />
      <LatestMessages />
    </div>
  );
};

import { Signals } from "./signals";

export const UserStatus = ({ username }: { username: string }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <span>Usuário:</span>
        <span className="font-semibold tracking-wide">
          {username.toLowerCase()}
        </span>
      </div>
      <Signals />
    </div>
  );
};

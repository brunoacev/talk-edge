import { Ping } from "./ping";

export const Signals = () => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Internet</span>
        <Ping color="red" pulse />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Headset</span>
        <Ping color="green" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Sistema</span>
        <Ping color="green" />
      </div>
    </div>
  );
};

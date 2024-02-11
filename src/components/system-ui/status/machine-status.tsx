import { Ping } from "./ping";

export const MachineStatus = () => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Internet</span>
        <Ping sucess pulse />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Headset</span>
        <Ping alert pulse />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Sistema</span>
        <Ping sucess pulse />
      </div>
    </div>
  );
};

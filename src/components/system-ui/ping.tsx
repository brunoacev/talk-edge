import { cn } from "@/lib/utils";

type Ping = {
  color: string;
  pulse?: boolean;
};

export const Ping = ({ color, pulse }: Ping) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`w-3 h-3 bg-${color}-500 rounded-full flex items-center justify-center`}
      >
        <div
          className={cn(`w-3 h-3 bg-${color}-500 rounded-full`, {
            ["animate-ping"]: !!pulse,
          })}
        />
      </div>
    </div>
  );
};

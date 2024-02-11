import { cn } from "@/lib/utils";

type Ping = {
  pulse?: boolean;
  alert?: boolean;
  sucess?: boolean;
  normal?: boolean;
};

export const Ping = ({ pulse, alert, normal, sucess }: Ping) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "w-3 h-3 bg-green-500 rounded-full flex items-center justify-center",
          {
            ["bg-red-500 "]: !!alert,
            ["bg-blue-500"]: !!normal,
            ["bg-green-500"]: !!sucess,
          }
        )}
      >
        <div
          className={cn(`w-3 h-3 rounded-full`, {
            ["animate-ping"]: !!pulse,
            ["bg-red-500 "]: !!alert,
            ["bg-blue-500"]: !!normal,
            ["bg-green-500"]: !!sucess,
          })}
        />
      </div>
    </div>
  );
};

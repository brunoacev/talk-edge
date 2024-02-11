import { TableClient } from "./table-client";
import { TableMenuOptions } from "./table-menu-options";

export const ShowTable = () => {
  return (
    <div className="border-2 w-full h-full flex flex-col gap-4 rounded-md  dark:border-zinc-600 p-2">
      <TableClient />
      <TableMenuOptions />
    </div>
  );
};

import { Status } from "./status";
import { ShowTable } from "./table";

export const SystemUI = () => {
  return (
    <section className="w-full h-full flex flex-col gap-2">
      <Status />
      <ShowTable />
    </section>
  );
};

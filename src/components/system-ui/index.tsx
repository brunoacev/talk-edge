import { SystemNavigation } from "./navigation";
import { SystemContent } from "./content";

export const SystemUI = () => {
  return (
    <section className="flex flex-col gap-2 h-full w-full">
      <SystemNavigation />
      <SystemContent />
    </section>
  );
};

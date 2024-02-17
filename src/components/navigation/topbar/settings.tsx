import { getSession } from "@/lib/session";
import { ToggleTheme } from "../../toggle-theme";
import { HandleMenu } from "./handleMenu";
import { MachineStatus } from "@/components/machine-status";

export async function Settings() {
  const session = await getSession();

  return (
    <div className="relative flex items-center gap-2 ">
      <HandleMenu />

      <div className="hidden md:flex md:gap-3 md:items-end">
        {!!session && <MachineStatus />}

        <ToggleTheme />
      </div>
    </div>
  );
}

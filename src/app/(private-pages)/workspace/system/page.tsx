import { SystemUI } from "@/components/system-ui";
import { SystemProvider } from "@/context/system-context";
import { getSession } from "@/lib/session";

export default async function SystemPage() {
  const session = await getSession();

  return (
    <main className="bg-zinc-200/50 dark:bg-zinc-700/50 w-full h-full rounded-md p-2">
      <SystemProvider>
        <SystemUI />
      </SystemProvider>
    </main>
  );
}

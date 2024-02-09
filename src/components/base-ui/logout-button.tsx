import { getSession, logout } from "@/lib/session";
import { LogOut } from "lucide-react";

export const LogoutButton = async () => {
  const session = await getSession();

  if (!session) return null;

  return (
    <form
      action={async () => {
        "use server";
        await logout();
      }}
      className="hover:bg-zinc-300/10 p-2 rounded-md hover:cursor-pointer"
    >
      <button type="submit">
        <LogOut className="w-5 h-5" />
      </button>
    </form>
  );
};

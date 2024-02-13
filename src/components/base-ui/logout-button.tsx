import { getSession, logout } from "@/lib/session";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

export const LogoutButton = async () => {
  const session = await getSession();

  if (!session) return null;

  return (
    <form
      action={async () => {
        await logout();
        redirect("/login-account");
      }}
    >
      <button
        type="submit"
        className="px-2 py-1 rounded-sm bg-zinc-50 dark:bg-zinc-700 flex justify-center items-center hover:cursor-pointer"
      >
        <LogOut size={17} />
      </button>
    </form>
  );
};

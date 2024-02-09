import { logoutAccountAction } from "@/actions/logout-account";

export default function Logout() {
  return (
    <form action={logoutAccountAction}>
      <button type="submit" className="w-fit">
        Sair
      </button>
    </form>
  );
}

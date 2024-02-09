import { logout } from "@/lib/session";
import { redirect } from "next/navigation";

export const LogoutForm = () => {
  return (
    <section>
      <form
        action={async (formData: FormData) => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Sair</button>
      </form>
    </section>
  );
};

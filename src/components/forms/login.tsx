import { login } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";

export const LoginForm = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <form
        action={async (formData: FormData) => {
          "use server";
          await login(formData);
          redirect("/projeto");
        }}
        className="bg-zinc-50 dark:bg-zinc-950/50 px-4 py-6 rounded-md shadow-md flex flex-col gap-4 w-full max-w-md items-start"
      >
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl tracking-wide">
            Faça login na sua conta!
          </h2>
          <p className="text-xs tracking-wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque vel
            ipsa temporibus error deleniti esse commodi mollitia, eveniet porro
            sapiente.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="font-semibold text-md tracking-wide"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com"
            required
            className="rounded-sm px-4 py-2 text-start w-full bg-zinc-200/50 dark:bg-zinc-50/20 text-sm"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="font-semibold text-md tracking-wide"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            className="rounded-sm px-4 py-2 text-start w-full bg-zinc-200/50 dark:bg-zinc-50/20 text-sm"
          />
        </div>

        <div className="w-full flex items-center gap-2">
          <span>Não possui uma conta?</span>
          <Link href={"/create-account"} className="underline tracking-wide">
            Crie agora!
          </Link>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-50/80 font-semibold dark:text-zinc-950 w-full rounded-md dark:hover:bg-zinc-50 transition-all duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </section>
  );
};

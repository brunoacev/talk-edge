import Link from "next/link";
import { createAccountAction } from "@/actions/create-account";
import { SubmitButton } from "../base-ui/submit-button";

export const CreateAccountForm = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <form
        action={createAccountAction}
        className="bg-zinc-50 dark:bg-zinc-950/50 px-4 py-6 rounded-md shadow-md flex flex-col gap-4 w-full max-w-md items-start"
      >
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl tracking-wide">
            Crie sua nova conta!
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
          <span>Já possui uma conta?</span>
          <Link href={"/login"} className="underline tracking-wide">
            Faça login agora!
          </Link>
        </div>

        <SubmitButton>Criar</SubmitButton>
      </form>
    </section>
  );
};

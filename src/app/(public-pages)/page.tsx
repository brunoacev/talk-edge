import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-full">
      <h1 className="font-semibold tracking-wide text-xl text-center">
        Projeto para Meireles e Freitas Digital
      </h1>

      <div className=" flex items-center gap-1 flex-wrap">
        <span> Para acesso a plataforma, faça login acesse esse </span>
        <Link
          href={"/login-account"}
          className="underline hover:cursor-pointer"
        >
          link
        </Link>
      </div>
    </main>
  );
}

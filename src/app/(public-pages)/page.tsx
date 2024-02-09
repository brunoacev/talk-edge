import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-full">
      <h1 className="font-semibold tracking-wide text-xl text-center">
        Projeto para Meireles e Freitas Digital
      </h1>

      <div className=" flex items-center gap-1 flex-wrap">
        <span> Mais sobre o desenvolvedor, acesse:</span>
        <Link
          href={"https://brunoacev-dev.vercel.app/"}
          target="_blank"
          className="underline hover:cursor-pointer"
        >
          brunoacev.com
        </Link>
      </div>
    </main>
  );
}

export default function WorkspacePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-full w-full">
      <section className="hidden md:flex bg-zinc-200/50 dark:bg-zinc-700/50 w-full h-full rounded-md p-2 flex-col gap-4">
        <h1 className="font-bold text-xl tracking-wide">Novidades!!</h1>
        <p className="tracking-wide">
          Conteúdo reservado para algo informativo.
        </p>
      </section>

      <h2 className="font-semibold tracking-wide text-lg text-center md:hidden">
        Projeto em desenvolvimento para o ambiente desktop, no momento sem
        previsão para dispositivos mobile.
      </h2>
    </main>
  );
}

import { getSession } from "@/lib/session";

export default async function Home() {
  const session = await getSession();
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1>Clean Page!</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}

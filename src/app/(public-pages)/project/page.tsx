import { getSession } from "@/lib/session";

export default async function ProjectPage() {
  const session = await getSession();

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1>Project Page!</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}

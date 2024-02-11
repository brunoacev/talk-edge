import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <span className="bg-blue-500/80 font-semibold text-zinc-50 px-4 py-2 rounded-md">
        T
      </span>
      <span className="font-semibold tracking-wider">Talk Edge</span>
    </Link>
  );
};

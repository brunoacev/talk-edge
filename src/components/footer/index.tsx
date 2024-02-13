import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full h-fit p-2 text-sm">
      <span> Mais sobre o desenvolvedor, acesse: </span>
      <Link
        href={"https://brunoacev-dev.vercel.app/"}
        target="_blank"
        className="underline hover:cursor-pointer"
      >
        brunoacev-dev.vercel.app
      </Link>
    </footer>
  );
};

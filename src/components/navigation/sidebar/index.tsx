import { UserOptions } from "./user-options";
import { MenuLinks } from "./menu-links";

export const Sidebar = () => {
  return (
    <nav className="hidden md:flex md:w-full md:max-w-36 md:flex-col md:justify-between md:items-start md:min-h-full bg-zinc-200/50 dark:bg-zinc-700/50 p-4 rounded-md">
      <MenuLinks />
      <UserOptions />
    </nav>
  );
};

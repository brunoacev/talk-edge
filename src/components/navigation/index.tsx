import { Topbar } from "./topbar";
import { Sidebar } from "./sidebar";

type NavigationType = {
  orientation: "topbar" | "sidebar";
};

export const Navigation = async ({ orientation }: NavigationType) => {
  if (orientation === "topbar") return <Topbar />;
  if (orientation === "sidebar") return <Sidebar />;
  return null;
};

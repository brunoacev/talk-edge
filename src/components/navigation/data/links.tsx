import { Boxes, MonitorDot, Newspaper, NotebookPen } from "lucide-react";

interface UrlLinksType {
  urlName: string;
  urlPath: string;
  group?: "forYou" | "System";
  icon?: React.ReactNode;
  slug?: string;
  query?: {};
}

const UrlLinks: UrlLinksType[] = [
  {
    urlName: "Login",
    urlPath: "/login-account",
  },
];

const WorkspaceLinks: UrlLinksType[] = [
  {
    urlName: "Sistema",
    urlPath: "/workspace/system",
    slug: "system",
    group: "System",
    icon: <MonitorDot size={17} />,
  },
  {
    urlName: "Grupos",
    urlPath: "/workspace",
    slug: "group",
    group: "forYou",
    icon: <Boxes size={17} />,
  },
  {
    urlName: "Novidades",
    urlPath: "/workspace",
    slug: "news",
    group: "forYou",
    icon: <Newspaper size={17} />,
  },
  {
    urlName: "Cursos",
    urlPath: "/workspace",
    slug: "test",
    group: "forYou",
    icon: <NotebookPen size={17} />,
  },
];

export { UrlLinks, WorkspaceLinks, type UrlLinksType };

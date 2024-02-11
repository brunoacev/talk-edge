import { MonitorDot, Search } from "lucide-react";

interface UrlLinksType {
  urlName: string;
  urlPath: string;
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
    icon: <MonitorDot size={17} />,
  },
  {
    urlName: "Pesquisar",
    urlPath: "/workspace/search",
    slug: "search",
    icon: <Search size={17} />,
  },
];

export { UrlLinks, WorkspaceLinks, type UrlLinksType };

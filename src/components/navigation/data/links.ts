interface UrlLinksType {
  urlName: string;
  urlPath: string;
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
  },
  {
    urlName: "Pesquisar",
    urlPath: "/workspace/search",
    slug: "search",
  },
];

export { UrlLinks, WorkspaceLinks, type UrlLinksType };

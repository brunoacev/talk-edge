interface UrlLinksType {
  urlName: string;
  urlPath: string;
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
    urlPath: "/workspace",
  },
  {
    urlName: "Pesquisar",
    urlPath: "/workspace",
  },
  {
    urlName: "Detalhes",
    urlPath: "/workspace",
  },
];

export { UrlLinks, WorkspaceLinks, type UrlLinksType };

interface UrlLinksType {
  urlName: string;
  urlPath: string;
  query?: {};
}

const UrlLinks: UrlLinksType[] = [
  {
    urlName: "Projeto",
    urlPath: "/project",
  },
  {
    urlName: "Login",
    urlPath: "/login-account",
  },
];

export { UrlLinks, type UrlLinksType };

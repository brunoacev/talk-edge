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

export { UrlLinks, type UrlLinksType };

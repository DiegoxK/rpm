import logo from "@/public/RPMLogo.svg";

type NavigationItem = {
  name: string;
  url: string;
};

type SiteConfig = {
  navigation: NavigationItem[];
};

export const siteConfig: SiteConfig = {
  navigation: [
    {
      name: "Inicio",
      url: "/",
    },
    {
      name: "Servicios",
      url: "/services",
    },
    {
      name: "Planes",
      url: "/plans",
    },
    {
      name: "Contacto",
      url: "/contact",
    },
  ],
};

export const assets = {
  logo,
};

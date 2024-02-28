import logo from "@/public/RPMLogo.svg";
import hero from "@/public/heroimg.svg";

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
  ],
};

export const assets = {
  logo,
  hero,
};

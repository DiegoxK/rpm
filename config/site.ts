import Logo from "@/public/RPMLogo.svg";
import HeroBG from "@/public/Home/HeroBG.svg";

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
      name: "Nosotros",
      url: "/plans",
    },
  ],
};

export const assets = {
  Logo,
  HeroBG,
};

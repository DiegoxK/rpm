import logo from "@/public/RPMLogo.svg";
import hero from "@/public/heroimg.svg";

import WebDesign from "@/public/services/WebDesign.webp";
import Strategies from "@/public/services/Strategies.webp";
import Advertisement from "@/public/services/Advertisement.webp";

import Local from "@/public/about/Local.svg";
import Results from "@/public/about/Results.svg";
import Specialized from "@/public/about/Specialized.svg";

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
  WebDesign,
  Strategies,
  Advertisement,
  Local,
  Results,
  Specialized,
};

import Logo from "@/public/RPMLogo.svg";
import HeroBG from "@/public/home/HeroBG.svg";

import Contacto from "@/public/home/path/contacto.svg";
import Desarrollo from "@/public/home/path/desarrollo.svg";
import DownArrow from "@/public/home/path/down-arrow.svg";
import Investigacion from "@/public/home/path/investigacion.svg";
import Resultados from "@/public/home/path/resultados.svg";
import UpArrow from "@/public/home/path/up-arrow.svg";

import ContentIcon from "@/public/home/services/Content-Icon.svg";
import Decor1 from "@/public/home/services/Decor-1.svg";
import Decor2 from "@/public/home/services/Decor-2.svg";
import Decor3 from "@/public/home/services/Decor-3.svg";
import SeoIcon from "@/public/home/services/SEO-Icon.svg";
import ServiceContent from "@/public/home/services/Service-Content.svg";
import ServiceSeo from "@/public/home/services/Service-SEO.svg";
import ServiceWeb from "@/public/home/services/Service-Web.svg";
import WebIcon from "@/public/home/services/Web-Icon.svg";

import Comunication from "@/public/home/qualities/Comunication.svg";
import Efficiency from "@/public/home/qualities/Efficiency.svg";
import Guarantee from "@/public/home/qualities/Guarantee.svg";
import Local from "@/public/home/qualities/Local.svg";
import Specialized from "@/public/home/qualities/Specialized.svg";

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
  paths: {
    Contacto,
    Desarrollo,
    DownArrow,
    Investigacion,
    Resultados,
    UpArrow,
  },
  services: {
    ContentIcon,
    Decor1,
    Decor2,
    Decor3,
    SeoIcon,
    ServiceContent,
    ServiceSeo,
    ServiceWeb,
    WebIcon,
  },
  qualities: {
    Comunication,
    Efficiency,
    Guarantee,
    Local,
    Specialized,
  },
};

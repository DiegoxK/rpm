import Logo from "@/public/RPMLogo.svg";
import HeroBG from "@/public/Home/HeroBG.svg";

import Contacto from "@/public/Home/path/contacto.svg";
import Desarrollo from "@/public/Home/path/desarrollo.svg";
import DownArrow from "@/public/Home/path/down-arrow.svg";
import Investigacion from "@/public/Home/path/investigacion.svg";
import Resultados from "@/public/Home/path/resultados.svg";
import UpArrow from "@/public/Home/path/up-arrow.svg";

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
};

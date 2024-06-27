import { assets } from "@/config/site";

import Services from "./components/services";
import ContactForm from "./components/contact-form";
import Hero from "./components/hero";
import Path from "./components/path";
import Qualities from "./components/qualities";

export default function LandPage() {
  const paths = [
    {
      icon: assets.paths.Contacto,
      title: "Contacto",
      description:
        "Establecemos un vínculo directo contigo para comprender tus necesidades, metas y visión.",
    },
    {
      icon: assets.paths.Investigacion,
      title: "Investigación",
      description:
        "Analizamos tu mercado, competencia y audiencia objetivo para trazar estrategias efectivas.",
    },
    {
      icon: assets.paths.Desarrollo,
      title: "Desarrollo",
      description:
        "Llevamos a cabo la ejecución de una estrategia personalizada que se alinee con tus objetivos.",
    },
    {
      icon: assets.paths.Resultados,
      title: "Resultados",
      description:
        "Garantizamos que alcances los resultados deseados y obtengas el éxito que buscas en tu empresa.",
    },
  ];

  const services = [
    {
      img: assets.services.ServiceContent,
      icon: assets.services.ContentIcon,
      decor: assets.services.Decor2,
      title: "ANUNCIOS Y PRODUCCIÓN DE CONTENIDOS",
      description:
        "Impulsa tu marca con anuncios llamativos y contenidos de calidad. Atraemos y fidelizamos a tus clientes",
      bulletPoints: [
        "Creación de anuncios.",
        "Crecimiento órganico en redes sociales.",
        "Inboud Marketing.",
      ],
    },
    {
      img: assets.services.ServiceSeo,
      icon: assets.services.SeoIcon,
      decor: assets.services.Decor3,
      title: "ESTRATEGIAS DE POSICIONAMIENTO SEO",
      description:
        "Aumentamos tu visibilidad y tráfico web, mejoramos conversiones y ROI.",
      bulletPoints: [
        "Auditoría SEO.",
        "Optimización ON-PAGE y OFF-PAGE.",
        "Monitoreo y análisis constante.",
      ],
    },
  ];

  const qualities = [
    {
      icon: assets.qualities.Local,
      title: "Somos Locales",
      description:
        "Contamos con conocimiento profundo de la publicidad en Colombia para brindarte la mejor estrategia.",
    },
    {
      icon: assets.qualities.Guarantee,
      title: "Garantía",
      description:
        "Te garantizamos un servicio de calidad excepcional y nos aseguraremos de que tengas los resultados deseados.",
    },
    {
      icon: assets.qualities.Comunication,
      title: "Comunicación Efectiva",
      description:
        "Podrás comunicarte rápidamente con nuestro personal, que te brindará una atención transparente, clara y concisa.",
    },
    {
      icon: assets.qualities.Efficiency,
      title: "Eficiencia Competitiva",
      description:
        "Nuestra filosofía de trabajo se basa en la productividad. Te entregaremos los mejores resultados en el menor tiempo posible.",
    },
    {
      icon: assets.qualities.Specialized,
      title: "Estamos especializados",
      description:
        "Nuestro equipo combina la maestría en diseño, la estrategia de marketing y la excelencia en programación para tu crecimiento.",
    },
  ];

  return (
    <>
      <main>
        <Hero />
        <Path paths={paths} />
        <Services services={services} />
        <Qualities qualities={qualities} />
      </main>
      <ContactForm />
    </>
  );
}

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
      img: assets.services.ServiceWeb,
      icon: assets.services.WebIcon,
      decor: assets.services.Decor1,
      title: "Desarrollo Web",
      description:
        "Sé visible 24/7,  gana credibilidad, capta clientes y potencia tus ventas.",
      bulletPoints: [
        "Desarrollo web profesional.",
        "Diseño UI/UX personalizado.",
        "Mantenimiento y soporte continuo.",
      ],
    },
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

  return (
    <>
      <main>
        <Hero />
        <Path paths={paths} />
        <Services services={services} />
        <Qualities />
      </main>
      <ContactForm />
    </>
  );
}

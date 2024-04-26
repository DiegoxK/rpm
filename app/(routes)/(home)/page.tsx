import { assets } from "@/config/site";
import Services from "../services/page";
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

  return (
    <>
      <main>
        <Hero />
        <Path paths={paths} />
        <Services />
        <Qualities />
      </main>
      <ContactForm />
    </>
  );
}

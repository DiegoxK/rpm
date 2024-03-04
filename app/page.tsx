import { Button } from "@/components/ui/button";
import { assets } from "@/config/site";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

const Section = ({
  children,
  hero,
  id,
  className,
}: {
  children: React.ReactNode;
  hero?: boolean;
  id: string;
  className: string;
}) => {
  return (
    <section
      id={id}
      className={cn(
        "relative flex items-center justify-center overflow-ellipsis",
        hero ? "min-h-[calc(100vh-160px)]" : "min-h-screen",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <main className="container flex flex-col gap-12 overflow-hidden py-10 md:overflow-visible md:px-20">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}

const Hero = () => {
  return (
    <Section hero id="hero" className="gap-20">
      <div className="flex flex-col gap-5">
        <div className="mb-10">
          <Image
            src={assets.logo}
            width={260}
            height={260}
            alt="siteLogo"
            priority
          />
        </div>
        <div className="flex flex-col gap-5 uppercase">
          <p className="text-4xl font-extralight">a tu alcance</p>
          <h1 className="text-4xl font-bold">
            Más exposición, más clientes, más ganancias.
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <p>
            Creamos el ecosistema digital de tu negocio, hacemos marketing
            efectivo y multiplicamos tu exposición online.
          </p>
          <Button className="rounded-full font-bold text-black">
            ¡SÍ, QUIERO ESO!
          </Button>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src={assets.hero}
          width={500}
          height={500}
          alt="heroImage"
          priority
        />
      </div>
    </Section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Diseño web personalizado",
      image: assets.WebDesign,
      bulletPoints: [
        "Creación web profesional",
        "Diseño UI/UX personalizado",
        "Mantenimiento y optimización continúa",
      ],
    },
    {
      title: "Anuncios y estrategias organicas",
      image: assets.Advertisement,
      bulletPoints: [
        "Producción de contenidos llamativos",
        "Inboud Marketing",
        "Seguimiento de métricas",
      ],
    },
    {
      title: "Plan de posicionamiento SEO",
      image: assets.Strategies,
      bulletPoints: [
        "Auditoría SEO",
        "Monitoreo y asistencia constante",
        "Optimizacón on-page y off-page",
      ],
    },
  ];

  const ServiceCard = ({
    title,
    image,
    bulletPoints,
  }: {
    title: string;
    image: StaticImageData;
    bulletPoints: string[];
  }) => {
    return (
      <div className="flex flex-col gap-5">
        <Image
          className="self-center"
          src={image}
          width={150}
          height={150}
          alt=""
        />
        <h3 className="text-2xl font-bold">{title}</h3>
        <ul>
          {bulletPoints.map((point, index) => (
            <li className="list-disc" key={index}>
              {point}
            </li>
          ))}
        </ul>
        <Button className="rounded-full capitalize">Saber más</Button>
      </div>
    );
  };

  return (
    <Section id="services" className="flex-col gap-20">
      <h2 className="text-3xl">¿Cómo lo hacemos?</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

const About = () => {
  const qualities = [
    {
      title: "LOCAL",
      image: assets.Local,
      higlighted: false,
      description:
        "Estamos en el mismo país que tú. Como empresa local, podrás contactarnos cuando nos necesites.",
    },
    {
      title: "RESULTADOS",
      image: assets.Results,
      higlighted: true,
      description:
        "Priorizamos tus resultados por encima de todo, si tú ganas nosotros ganamos.",
    },
    {
      title: "ESPECIALIZADOS",
      image: assets.Specialized,
      higlighted: false,
      description:
        "Nuestro equipo trabaja en perfecta sinergia para ofrecerte los mejores resultados en el menor tiempo posible.",
    },
  ];

  const AboutCard = ({
    title,
    image,
    higlighted,
    description,
  }: {
    title: string;
    image: StaticImageData;
    higlighted?: boolean;
    description: string;
  }) => {
    return (
      <div className="flex flex-col gap-5">
        <Image
          className="self-center"
          src={image}
          width={150}
          height={150}
          alt=""
        />
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <Button
          variant={higlighted ? "secondary" : "default"}
          className="rounded-full capitalize"
        >
          Saber más
        </Button>
      </div>
    );
  };
  return (
    <Section id="about" className="flex-col gap-20 text-center">
      <h2 className="text-3xl ">¿Qué nos hace diferentes?</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {qualities.map((quality, index) => (
          <AboutCard key={index} {...quality} />
        ))}
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section id="contact" className="flex-col gap-20">
      <h2 className="text-center text-3xl">
        Contáctanos para un Análisis de Marketing gratuito
      </h2>
      <div className="flex flex-col gap-5">
        <p className="text-center">
          ¿Te gustaría saber que podemos hacer por ti? Rellena el formulario y
          te contactaremos lo antes posible. Sin compromisos, sin tácticas de
          venta molestas. No desperdiciaremos tu tiempo.
        </p>
        <div className="flex flex-col gap-5 md:mx-40">
          <div className="grid grid-cols-2 gap-5">
            <input className="rounded-md" type="text" placeholder="Nombre" />
            <input className="rounded-md" type="email" placeholder="Correo" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <input
              className="rounded-md"
              type="text"
              placeholder="Nombre de la empresa"
            />
            <input className="rounded-md" type="tel" placeholder="Teléfono" />
          </div>
          <textarea className="rounded-md" placeholder="Mensaje" />
          <Button variant="secondary" className="rounded-full capitalize">
            Enviar
          </Button>
        </div>
      </div>
    </Section>
  );
};

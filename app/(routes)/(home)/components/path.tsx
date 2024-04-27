import Section from "@/components/ui/section";
import Title from "@/components/ui/section";
import { assets } from "@/config/site";
import Image from "next/image";

type Path = {
  icon: string;
  title: string;
  description: string;
};

interface PathProps {
  paths: Path[];
}

export default function Path({ paths }: PathProps) {
  const layout = [];

  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      const path = paths[i / 2];

      layout.push(
        <div
          key={i}
          className="col-span-2 flex flex-col items-center justify-center gap-4"
        >
          <div className="w-fit rounded-xl bg-primary p-5">
            <Image
              src={path.icon}
              alt="Icono de la ruta"
              width={51}
              height={51}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{path.title}</h3>
            <p>{path.description}</p>
          </div>
        </div>,
      );
    } else {
      const Arrow = (arrow: any, alt: string) => {
        return (
          <div key={i} className="mt-4 hidden flex-col items-center lg:flex">
            <Image src={arrow} alt={alt} />
          </div>
        );
      };

      if (i === 1 || i === 5) {
        layout.push(Arrow(assets.paths.UpArrow, "Flecha hacia arriba"));
      } else {
        layout.push(Arrow(assets.paths.DownArrow, "Flecha hacia abajo"));
      }
    }
  }

  return (
    <Section className="my-36" title="TU CAMINO AL ÉXITO">
      <div className="grid gap-10 text-center lg:grid-cols-11 lg:gap-0">
        {layout}
      </div>
    </Section>
  );
}

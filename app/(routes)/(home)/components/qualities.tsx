import Section from "@/components/ui/section";
import Image from "next/image";

type Quality = {
  icon: string;
  title: string;
  description: string;
};

interface QualitiesProps {
  qualities: Quality[];
}

export default function Qualities({ qualities }: QualitiesProps) {
  const QualityCard = ({ quality }: { quality: Quality }) => {
    return (
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Image src={quality.icon} alt="Icon" />
        <div>
          <h3 className="text-xl font-semibold">{quality.title}</h3>
          <p>{quality.description}</p>
        </div>
      </div>
    );
  };
  return (
    <Section title="¿POR QUÉ DEBERÍAS ELEGIRNOS?">
      <div className="space-y-12 lg:space-y-24">
        <div className="grid gap-10 lg:grid-cols-3">
          {qualities
            .map((quality, index) => (
              <QualityCard key={index} quality={quality} />
            ))
            .slice(0, 3)}
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:px-44">
          {qualities
            .map((quality, index) => (
              <QualityCard key={index} quality={quality} />
            ))
            .slice(3, 6)}
        </div>
      </div>
    </Section>
  );
}

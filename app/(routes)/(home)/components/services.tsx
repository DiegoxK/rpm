/* eslint-disable jsx-a11y/alt-text */

import Section from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { assets } from "@/config/site";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  img: string;
  icon: string;
  decor: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const ServiceCard = ({
    img,
    icon,
    title,
    decor,
    description,
    bulletPoints,
  }: Service) => {
    return (
      <>
        <div className="relative mx-20 grid grid-cols-2 items-center gap-20">
          <Image
            className="absolute right-[-8%] top-[-15%]"
            src={decor}
            alt="decorator"
          />
          <div className="flex justify-center">
            <Image src={img} alt="WebService Image" />
          </div>
          <div className="space-y-3">
            <div className="flex gap-4">
              <Image src={icon} alt="Web Icon" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p>{description}</p>
            <ol className="ms-4 list-disc font-medium">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
            <Link
              className="flex items-center gap-1 text-primary"
              href="/services"
            >
              <p>Conoce más</p> <ArrowRight size={20} />
            </Link>
          </div>
          <Image
            className="absolute left-[-8%] top-[-15%]"
            style={{ transform: "scaleX(-1)" }}
            src={decor}
            alt="decorator"
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="h-6 bg-primary" />
      <Section className="my-36" title="NUESTROS SERVICIOS">
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>
      <div className="h-6 w-screen bg-primary" />
    </>
  );
}

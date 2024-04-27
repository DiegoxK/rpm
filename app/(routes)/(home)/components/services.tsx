/* eslint-disable jsx-a11y/alt-text */

import Section from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { assets } from "@/config/site";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  img: string;
  icon: string;
  decor: string;
  title: string;
  description: string;
  bulletPoints: string[];
};

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const ServiceCard = ({ service }: { service: Service }) => {
    return (
      <>
        <div className="relative grid items-center gap-20 lg:mx-20 lg:grid-cols-2">
          <Image
            className="absolute right-[-12%] top-[-15%] hidden lg:block"
            src={service.decor}
            alt="decorator"
          />
          <div className="flex justify-center">
            <Image src={service.img} alt="WebService Image" />
          </div>
          <div className="space-y-3">
            <div className="flex gap-4">
              <Image src={service.icon} alt="Web Icon" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p>{service.description}</p>
            <ol className="ms-4 list-disc font-medium">
              {service.bulletPoints.map((point, index) => (
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
            className="absolute left-[-12%] top-[-15%] hidden lg:block"
            style={{ transform: "scaleX(-1)" }}
            src={service.decor}
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
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </Section>
      <div className="h-6 bg-primary" />
    </>
  );
}

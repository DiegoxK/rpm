import { Button } from "@/components/ui/button";
import { assets } from "@/config/site";
import Image from "next/image";

export default function Home() {
  return (
    <section id="hero" className="flex items-center justify-center gap-20">
      <div className="flex w-[550px] flex-col gap-5">
        <div className="mb-10">
          <Image src={assets.logo} width={250} height={250} alt="siteLogo" />
        </div>
        <div className="flex flex-col gap-5 uppercase">
          <p className="text-5xl font-extralight">a tu alcance</p>
          <h1 className="text-4xl font-bold">
            Más exposición, más clientes, más beneficios.
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
        <Image src={assets.hero} width={400} height={400} alt="heroImage" />
      </div>
    </section>
  );
}

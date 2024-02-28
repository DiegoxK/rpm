import { Button } from "@/components/ui/button";
import { assets } from "@/config/site";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex gap-20 justify-center items-center">
      <div className="flex flex-col gap-5 w-[600px]">
        <div>
          <Image src={assets.logo} width={250} height={250} alt="siteLogo" />
        </div>
        <div className="uppercase flex flex-col gap-5">
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
          <Button className="text-black font-bold rounded-full">
            ¡SÍ, QUIERO ESO!
          </Button>
        </div>
      </div>
      <div>
        <Image src={assets.hero} width={400} height={400} alt="heroImage" />
      </div>
    </section>
  );
}

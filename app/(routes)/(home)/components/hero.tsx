import { Button } from "@/components/ui/button";
import { assets } from "@/config/site";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <Image
        className="absolute bottom-0 w-full"
        alt="Hero Background"
        src={assets.HeroBG}
      />
      <section className="container space-y-5 pt-14 text-center xl:px-96">
        <p className="text-2xl">A TU ALCANCE</p>
        <h1 className="text-3xl font-bold">
          MÁS EXPOSICIÓN, MÁS CLIENTES, MÁS GANANCIAS.
        </h1>
        <p className="font-light">
          Creamos el ecosistema digital de tu negocio, hacemos marketing
          efectivo y multiplicamos tu exposición online.
        </p>
        <Button className="rounded-full xl:px-48">Si quiero eso</Button>
      </section>
    </div>
  );
}

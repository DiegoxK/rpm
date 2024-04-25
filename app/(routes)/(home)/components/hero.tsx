import { Button } from "@/components/ui/button";
import { assets } from "@/config/site";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex h-[calc(100vh-57px)] items-center">
      <Image
        className="absolute bottom-0 z-[-1] w-full"
        alt="Hero Background"
        src={assets.HeroBG}
      />
      <section className="container mb-[20%] space-y-5 text-center xl:px-96">
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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { assets } from "@/config/site";
import Image from "next/image";

export default function ContactForm() {
  return (
    <>
      <Image
        className="mt-44 w-screen"
        alt="Contact wave"
        src={assets.contact.ContactBg}
      />

      <div className="bg-primary text-white">
        <div className="container space-y-3">
          <div className="grid grid-cols-3">
            <div className="relative">
              <Image
                className="absolute bottom-0 right-[16%]"
                alt="Contact Image"
                src={assets.contact.ContactImage}
              />
            </div>
            <div className="col-span-2 space-y-4">
              <h3 className="text-4xl font-bold">Contactanos</h3>
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Tu nombre*" />
                <Input placeholder="Correo*" />
                <Input placeholder="Nombre de la empresa*" />
                <Input placeholder="Telefono*" />
              </div>
            </div>
          </div>
          <Textarea placeholder="Tu mensaje*" />
          <Button className="w-full rounded-lg font-bold" variant="secondary">
            Enviar Mensaje
          </Button>
        </div>
      </div>
    </>
  );
}

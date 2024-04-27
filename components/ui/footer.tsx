import { assets } from "@/config/site";
import Image from "next/image";
import { Separator } from "./separator";

export default function Footer() {
  return (
    <div className="bg-primary text-white">
      <div className="container pt-10">
        <Image src={assets.WhiteLogo} alt="logo" />
        <div className="grid grid-cols-3 py-6">
          <div className="col-span-2 flex flex-col gap-2">
            <h4>
              R E S U L T A D O S P U B L I C I T A R I O S M E D E L L Í N
            </h4>
            <p>
              Somos expertos en crear ecosistemas digitales que llevarán tu
              marca a lo más alto. Te ayudaremos a conectar con{" "}
              <span className="font-semibold">
                más clientes, aumentar tus ventas y alcanzar el éxito
              </span>
            </p>
          </div>
          <div className="text-right">
            <h4 className="font-bold">CONTACTO</h4>
            <p>Teléfono: 3506294428</p>
            <p>Medellín, Colombia</p>
          </div>
        </div>
        <Separator className="bg-white" />
        <div className="flex justify-between py-6">
          <p className="font-light">Copyright @RPM 2024 All Rights Reversed</p>
          <div className="flex gap-2">
            <p>Siguenos</p>
            <Image height={25} src={assets.footer.Twitter} alt="Twitter Icon" />
            <Image
              height={25}
              src={assets.footer.Facebook}
              alt="Facebook Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

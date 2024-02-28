import { Button } from "./button";
import MainNav from "./navigation/main-nav";
import MobileNav from "./navigation/mobile-nav";

export default function Header() {
  return (
    <header className="container sticky top-0 z-50 w-full py-2">
      <div className="flex h-14 items-center">
        <div className="flex w-full items-center justify-between">
          <MainNav />
          <MobileNav />
          <Button className="rounded-full px-8 font-semibold text-black">
            Contacto
          </Button>
        </div>
      </div>
    </header>
  );
}

import { Button } from "./button";
import MainNav from "./navigation/main-nav";
import MobileNav from "./navigation/mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background container">
      <div className="my-2 flex h-14 items-center">
        <div className="flex w-full items-center justify-between">
          <MainNav />
          <MobileNav />
          <Button className="text-black rounded-full px-8 font-semibold">
            Contacto
          </Button>
        </div>
      </div>
    </header>
  );
}

import { Button } from "./button";
import MainNav from "./navigation/main-nav";
import MobileNav from "./navigation/mobile-nav";

export default function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 container top-0 z-50 w-full pt-4 backdrop-blur md:px-20">
      <div className="flex h-14 items-center">
        <div className="flex w-full items-center justify-between">
          <MainNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

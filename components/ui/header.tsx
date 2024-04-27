import MainNav from "./navigation/main-nav";
import MobileNav from "./navigation/mobile-nav";

export default function Header() {
  return (
    <header className="container my-6 w-full">
      <div className="flex items-center">
        <div className="flex w-full items-center justify-between">
          <MainNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
